/**
 * CartellaModulisticaView view component.
 * @module components/theme/View/CartellaModulisticaView
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defineMessages, useIntl } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import {
  getModulisticaItems,
  resetModulisticaItems,
} from 'io-sanita-theme/actions';

import {
  PageHeader,
  RelatedItems,
  Placeholder,
  Metadata,
} from 'io-sanita-theme/components/View/commons';
import { TextOrBlocks } from 'io-sanita-theme/helpers';

import {
  CartellaModulisticaSearchBar,
  DocRow,
} from 'io-sanita-theme/components/View/CartellaModulistica';

const messages = defineMessages({
  formati_scaricabili: {
    id: 'cartellamodulistica_formati_scaricabili',
    defaultMessage: 'Formati scaricabili',
  },
});

import './cartellaModulistica.scss';

/**
 * CartellaModulisticaView view component class.
 * @function CartellaModulisticaView
 * @params {object} content Content object.
 * @returns {string} Markup of the component.
 */

const CartellaModulisticaView = ({ content }) => {
  const modulisticaItems = useSelector((state) => state.modulisticaItems);
  const dispatch = useDispatch();
  const intl = useIntl();

  const hasItems = content.items?.length > 0;
  const modulistica_items_url =
    content['@components']['modulistica-items']['@id'];

  const [searchableText, setSearchableText] = useState('');
  const modulistica = modulisticaItems?.data?.items ?? [];

  useEffect(() => {
    if (hasItems && !modulisticaItems.loading && !modulisticaItems.loaded) {
      dispatch(getModulisticaItems(flattenToAppURL(modulistica_items_url)));
    }
  }, [dispatch, hasItems, modulisticaItems, modulistica_items_url]);

  useEffect(() => {
    return () => dispatch(resetModulisticaItems());
  }, [dispatch]);

  const filterDocumento = (doc) => {
    return (
      doc.title.toLowerCase().indexOf((searchableText ?? '').toLowerCase()) >=
        0 || doc.items?.filter(filterItemsFN).length > 0
    );
  };

  const filterItemsFN = (item) => {
    return item.title
      ? item.title
          .toLowerCase()
          .indexOf((searchableText ?? '').toLowerCase()) >= 0
      : true;
  };

  const filterModulistica = (section) => {
    const searchable = (searchableText ?? '').toLowerCase();
    if (section['@type'] === 'Document' || section['@type'] === 'Documento') {
      if (searchableText?.length > 0) {
        if (section?.items?.length > 0) {
          return (section?.items).filter(filterDocumento).length > 0;
        } else if (section['@type'] === 'Documento') {
          return section.title
            ? section.title.toLowerCase().indexOf(searchable) >= 0
            : false;
        }
      }
      return true;
    } else if (
      section['@type'] === 'Link' ||
      section['@type'] === 'File' ||
      section['@type'] === 'Image'
    ) {
      return section.title
        ? section.title.toLowerCase().indexOf(searchable) >= 0
        : true;
    } else {
      return (section?.items ?? []).filter(filterItemsFN)?.length > 0;
    }
  };

  return (
    <>
      <div className="container px-4 my-4 cartellamodulistica-view">
        <PageHeader content={content} foto={!!content.image} />
        <TextOrBlocks content={content} />

        {/* -------SEARCH------- */}
        {content?.ricerca_in_testata && (
          <CartellaModulisticaSearchBar
            setSearchableText={setSearchableText}
            searchableText={searchableText}
          />
        )}

        {modulistica.length > 0 && (
          <section className="modulistica">
            {modulistica.filter(filterModulistica).map((section) => {
              return section['@type'] === 'Document' ? (
                <div className="documents-section" key={section['@id']}>
                  {/* <h3>{section.title}</h3> */}
                  {section.blocks &&
                    Object.keys(section.blocks)?.length > 0 && (
                      <TextOrBlocks content={section} />
                    )}

                  {section.items && section.items?.length > 0 && (
                    <div className="accordion items">
                      <div className="items-header">
                        <div></div>
                        <div className="downloads">
                          {intl.formatMessage(messages.formati_scaricabili)}
                        </div>
                      </div>
                      {section.items.filter(filterDocumento).map((doc) => {
                        if (doc.items) {
                          const items = doc.items.filter(filterItemsFN);
                          return (
                            <DocRow
                              doc={doc}
                              key={doc['@id']}
                              searchableText={searchableText}
                              collapsable={!content.non_collassare_gli_elementi}
                              items={
                                items.length === 0 ? doc.items : items
                              } /*se items.length ===0 significa che è stato fatto il match sul titolo del
                              documento, quindi devo mostrare tutti i suoi figli*/
                            />
                          );
                        } else {
                          return (
                            <DocRow
                              doc={doc}
                              key={doc['@id']}
                              searchableText={searchableText}
                              collapsable={!content.non_collassare_gli_elementi}
                            />
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              ) : section['@type'] === 'Documento' ? (
                <div className="document-row-section" key={section['@id']}>
                  <DocRow
                    doc={section}
                    items={
                      section.items ? section.items.filter(filterItemsFN) : []
                    }
                    searchableText={searchableText}
                    collapsable={!content.non_collassare_gli_elementi}
                  />
                </div>
              ) : (
                <div className="document-row-section" key={section['@id']}>
                  {/*file,immagine,link*/}
                  <DocRow
                    doc={section}
                    searchableText={searchableText}
                    collapsable={!content.non_collassare_gli_elementi}
                  />
                </div>
              );
            })}
          </section>
        )}

        <Metadata
          content={content}
          showDates={content.show_modified ?? false}
          className="my-4"
        />
      </div>

      <Placeholder position="afterContent" content={content} />
      <RelatedItems content={content} list={content?.servizi_collegati ?? []} />
      <Placeholder position="afterRelatedItems" content={content} />
    </>
  );
};

export default CartellaModulisticaView;
