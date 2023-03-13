import { collection, query, orderBy } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import MessageItem from 'components/message-item/MessageItem';
import MessageForm from 'components/message-form/MessageForm';

import database from 'firebaseApp';

import styles from './ChatRoom.module.css';

const ChatRoom: React.FC = () => {
  const loadQuery = query(collection(database, 'messages'), orderBy('createdAt'));
  const [messages] = useCollectionData(loadQuery);

  return (
    <div className="h-full py-[30px]">
      <div className="chat-container h-full flex flex-col justify-between">
        <div className={styles.chatField}>
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
