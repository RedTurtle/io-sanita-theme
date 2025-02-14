/* eslint-disable react-hooks/exhaustive-deps */
/**
 * LanguageSelector component.
 * @module components/ItaliaTheme/LanguageSelector/LanguageSelector
 */

import React from 'react';
import PropTypes from 'prop-types';

import find from 'lodash/find';
import map from 'lodash/map';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import {
  Row,
  Col,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem,
  Dropdown,
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
    <Dropdown inNavbar tag="div">
      <DropdownToggle aria-haspopup caret inNavbar>
        {languagesISO392[currentLang]}
      </DropdownToggle>
      <DropdownMenu flip tag="div">
        <Row tag="div">
          <Col tag="div" widths={['xs', 'sm', 'md', 'lg', 'xl']}>
            <LinkList tag="div">
              {map(config.settings.supportedLanguages, (lang) => {
                const translation = find(translations, { language: lang });
                return (
                  <LinkListItem
                    className={cx({ selected: lang === currentLang })}
                    to={
                      translation
                        ? flattenToAppURL(translation['@id'])
                        : `/${lang}`
                    }
                    title={langmap[lang].nativeName}
                    onClick={() => {
                      props.onClickAction();
                    }}
                    key={`language-selector-${lang}`}
                    tag={Link}
                  >
                    <span>{langmap[lang].nativeName}</span>
                  </LinkListItem>
                );
              })}
            </LinkList>
          </Col>
        </Row>
      </DropdownMenu>
    </Dropdown>
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
