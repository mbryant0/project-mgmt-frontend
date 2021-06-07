import React, { useEffect } from 'react';
import InboxSidePanel from '../../components/InboxSidePanel/InboxSidePanel';
import EmailPreview from '../../components/EmailPreview/EmailPreview';
import { connect } from 'react-redux';
import { getCurrentUserInfo } from '../../redux/actions/actions';
import Table from '../../components/Table/Table';
import './Inbox.css';

/* 
Side Panel
- Inbox
- Starred
Emails

*/

const Inbox = (props) => {
  const { currentUser, getCurrentUserInfo } = props;

  useEffect(() => {
    getCurrentUserInfo();
  }, []);

  const columns = [
    {
      label: '',
      field: 'starred',
      sort: 'disabled',
      width: 150,
    },
    {
      label: '',
      field: 'checked',
      sort: 'disabled',
      width: 150,
    },
    {
      label: '',
      field: 'subject',
      width: 270,
      sort: 'disabled',
    },
  ];

  const rows = currentUser.emails.map((email) => {
    return {
      starred: <input class='star' type='checkbox' title='starred' />,
      checked: <input type='checkbox' title='checked' />,
      subject: email.subject,
    };
  });
  return (
    <>
      <div className='main inbox'>
        <InboxSidePanel />
        <Table columns={columns} rows={rows} striped={false} bordered={false} />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};
export default connect(mapStateToProps, { getCurrentUserInfo })(Inbox);
