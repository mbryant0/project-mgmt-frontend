import React from 'react';
import InboxSidePanel from '../../components/InboxSidePanel/InboxSidePanel';
import EmailPreview from '../../components/EmailPreview/EmailPreview';
import { connect } from 'react-redux';

/* 
Side Panel
- Inbox
- Starred
- Sent
- Drafts (if I have time)
- Trash (if I have time)

Emails

*/

const Inbox = (props) => {
  const { emails } = props;
  return (
    <>
      <div className='main inbox'>
        <InboxSidePanel />
        <div className='email-container'>
          {emails.map((email) => {
            return (
              <>
                <EmailPreview email={email} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    emails: state.emails,
  };
};
export default connect(mapStateToProps)(Inbox);
