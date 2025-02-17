/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LanguageSelector component.
 * @module components/ItaliaTheme/LanguageSelector/LanguageSelector
 */

import React from 'react';
import PropTypes from 'prop-types';

import find from 'lodash/find';
import map from 'lodash/map';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  UncontrolledDropdown,
  Icon,
} from 'design-react-kit';

import langmap from '@plone/volto/helpers/LanguageMap/LanguageMap';
import Helmet from '@plone/volto/helpers/Helmet/Helmet';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import config from '@plone/volto/registry';

const languagesISO392 = {
  de: 'deu',
  en: 'eng',
  es: 'spa',
  eu: 'eus',
  fr: 'fra',
  it: 'ita',
  ja: 'jpn',
  nl: 'nld',
  pt: 'por',
  ro: 'ron',
};

/**
 * LanguageSelector component class.
 * @class LanguageSelector
 * @extends Component
 */
const LanguageSelector = (props) => {
  const currentLang = useSelector((state) => state.intl.locale);

  const translations = useSelector(
    (state) => state.content.data?.['@components']?.translations?.items,
  );

  return config.settings.isMultilingual ? (
    <UncontrolledDropdown nav tag="div" inNavbar>
      <DropdownToggle aria-haspopup caret inNavbar nav role="button">
        {languagesISO392[currentLang]}
        <Icon
          icon="it-expand"
          color="icon-white"
          className="d-none d-lg-block"
        />
      </DropdownToggle>
      <DropdownMenu flip>
        <Row>
          <Col size="12">
            <LinkList>
              {map(config.settings.supportedLanguages, (lang) => {
                const translation = find(translations, { language: lang });
                return (
                  <LinkListItem
                    className={cx({ selected: lang === currentLang })}
                    href={
                      translation
                        ? flattenToAppURL(translation['@id'])
                        : `/${lang}`
                    }
                    title={langmap[lang].nativeName}
                    onClick={() => {
                      props.onClickAction();
                    }}
                    key={`language-selector-${lang}`}
                    tag={UniversalLink}
                    inDropdown
                  >
                    <span>{langmap[lang].nativeName}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </DropdownMenu>
    </UncontrolledDropdown>
  ) : (
    <Helmet>
      <html lang={config.settings.defaultLanguage} />
    </Helmet>
  );
};

LanguageSelector.propTypes = {
  onClickAction: PropTypes.func,
};

LanguageSelector.defaultProps = {
  onClickAction: () => {},
};

export default LanguageSelector;
