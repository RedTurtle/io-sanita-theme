import { HelpBox, Metadata } from 'io-sanita-theme/components/View/commons';

import { richTextHasContent } from 'io-sanita-theme/helpers';

const FarmaciaMoreInfos = ({ content }) => {
  return (
    <Metadata content={content}>
      {/* HELP BOX - ULTERIORI INFORMAZIONI */}
      {richTextHasContent(content?.ulteriori_informazioni) && (
        <HelpBox text={content?.ulteriori_informazioni} />
      )}
    </Metadata>
  );
};

export default FarmaciaMoreInfos;
