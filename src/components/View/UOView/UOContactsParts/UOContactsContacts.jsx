import React from 'react';

import { ContactCard } from 'io-sanita-theme/components/View/commons';

const UOContactsContacts = ({ content }) => {
  return (
    content?.contact_info?.length > 0 && (
      <div className="mb-5">
        {content.contact_info.map((contact) => (
          <ContactCard contact={contact} key={contact['@id']} />
        ))}
      </div>
    )
  );
};
export default UOContactsContacts;
