import { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import ContainerEdit from '@plone/volto/components/manage/Blocks/Container/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { setUIState } from '@plone/volto/actions';
import { Container, Card, CardBody } from 'design-react-kit';
import { TextEditorWidget } from 'volto-slate-italia';
import { useIntl, defineMessages } from 'react-intl';
const messages = defineMessages({
  addItem: {
    id: 'Add accordion item',
    defaultMessage: 'Aggiungi elemento',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Titolo...',
  },
  description: {
    id: 'Description placeholder',
    defaultMessage: 'Descrizione...',
  },
});

const Edit = (props) => {
  const intl = useIntl();
  const { data } = props;
  const [selectedField, setSelectedField] = useState('title');

  const selectedBlock = useSelector((state) => state.form.ui.gridSelected);
  const dispatch = useDispatch();

  return (
    <div className="public-ui" tabIndex="-1">
      <div
        className="accordion"
        // This is required to enabling a small "in-between" clickable area
        // for bringing the Grid sidebar alive once you have selected an inner block
        onClick={(e) => {
          if (!e.block) dispatch(setUIState({ gridSelected: null }));
        }}
        role="presentation"
      >
        <div className="full-width section section-muted section-inset-shadow py-5 is-edit-mode">
          <Container className="px-md-4">
            <Card className="card-bg rounded" noWrapper={false} space tag="div">
              <div className="block-header">
                <div className="title">
                  <TextEditorWidget
                    {...props}
                    showToolbar={false}
                    data={props.data}
                    key={'title'}
                    fieldName="title"
                    selected={selectedField === 'title'}
                    setSelected={(f) => {
                      setSelectedField(f);
                    }}
                    placeholder={intl.formatMessage(messages.title)}
                    focusNextField={() => {
                      setSelectedField('description');
                    }}
                  />
                </div>

                <div className="description">
                  <TextEditorWidget
                    {...props}
                    showToolbar={true}
                    data={props.data}
                    fieldName="description"
                    selected={selectedField === 'description'}
                    setSelected={(f) => {
                      setSelectedField(f);
                    }}
                    placeholder={intl.formatMessage(messages.description)}
                    focusPrevField={() => {
                      setSelectedField('title');
                    }}
                    focusNextField={() => {
                      setSelectedField(null);
                      dispatch(setUIState({ gridSelected: null }));
                    }}
                  />
                </div>
              </div>
              <CardBody tag="div">
                <ContainerEdit
                  {...props}
                  selectedBlock={selectedBlock}
                  setSelectedBlock={(id) =>
                    dispatch(setUIState({ gridSelected: id }))
                  }
                  direction="vertical"
                />{' '}
              </CardBody>
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
};

Edit.propTypes = {
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  manage: PropTypes.bool.isRequired,
};

export default Edit;
