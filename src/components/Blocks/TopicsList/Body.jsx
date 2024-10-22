import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Col, Row } from 'design-react-kit';
import { getVocabulary } from '@plone/volto/actions';
import { TextBlockView } from '@plone/volto-slate/blocks/Text';
import { CardTaxonomy, LinkedHeadline } from 'io-sanita-theme/components';

/* Style */
import './topics-list.scss';

const VOC_USERS = 'collective.taxonomy.a_chi_si_rivolge_tassonomia';
const VOC_TOPICS = 'collective.taxonomy.parliamo_di';

const Body = ({ isEditMode, data, id }) => {
  const dispatch = useDispatch();
  const taxonomyUsers = useSelector(
    (state) => state?.vocabularies?.[VOC_USERS]?.items ?? [],
  );
  const taxonomyTopics = useSelector(
    (state) => state?.vocabularies?.[VOC_TOPICS]?.items ?? [],
  );
  // Chiamate alle tassonomie utenti e argomenti
  useEffect(() => {
    if (taxonomyTopics?.length === 0) {
      dispatch(
        getVocabulary({
          vocabNameOrURL: VOC_TOPICS,
        }),
      );
    }

    if (taxonomyUsers?.length === 0) {
      dispatch(
        getVocabulary({
          vocabNameOrURL: VOC_USERS,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="iosanita-block-topics-list">
      {data?.title && (
        <LinkedHeadline isEditMode={isEditMode} title={data.title} id={id} />
      )}

      {data?.description && (
        <div className="mb-2">
          <TextBlockView data={{ value: data?.description }} />
        </div>
      )}
      <Row>
        {data?.taxonomies?.map((obj, i) => {
          const t = obj.user || obj.topic;
          const _taxUser = taxonomyUsers.filter((tt) => tt.value === t);
          const _taxTopic = taxonomyTopics.filter((tt) => tt.value === t);
          const tUser = _taxUser?.length > 0 ? _taxUser[0] : null;
          const tTopic = _taxTopic?.length > 0 ? _taxTopic[0] : null;

          const tFound = tUser || tTopic;
          const type = tUser ? 'users' : 'topics';

          return tFound ? (
            <Col xs={6} lg={3} key={t + i} className="mb-lg-3">
              <CardTaxonomy
                item={tFound}
                type={type}
                showIcon={data.show_icon}
                icon={obj.icon}
                isEditMode={isEditMode}
                titleTag={!data.title ? 'h2' : 'h3'}
              />
            </Col>
          ) : (
            <></>
          );
        })}
      </Row>
    </div>
  );
};

export default Body;
