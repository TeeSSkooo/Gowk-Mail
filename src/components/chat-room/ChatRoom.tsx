import { collection, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import MessageItem from 'components/message-item/MessageItem';
import MessageForm from 'components/message-form/MessageForm';

import useTheme from 'hooks/useTheme';
import database from 'firebaseApp';

import styles from './ChatRoom.module.css';

const ChatRoom: React.FC = () => {
  const { theme } = useTheme();

  const loadQuery = query(collection(database, 'messages'), orderBy('createdAt'));
  const [messages] = useCollectionData(loadQuery);

  return (
    <div className="py-[30px]">
      <div className="chat-container h-screen flex flex-col justify-between">
        <div className={styles.chatField} style={{ borderColor: `${theme === 'light' ? '#000' : '#fff'}` }}>
          {messages?.map((message) => (
            <MessageItem
              avatarUrl={message?.senderAvatar!}
              text={message.text}
              id={message.id}
              key={message.createdAt}
            />
          ))}
        </div>
        <MessageForm />
      </div>
    </div>
  );
};

export default ChatRoom;
