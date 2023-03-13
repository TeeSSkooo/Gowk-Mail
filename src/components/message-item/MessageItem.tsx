import { useEffect, useRef } from 'react';

import MessageItemProps from 'types/props/MessageItemProps';
import useAuth from 'hooks/useAuth';

import styles from './MessageItem.module.css';

const MessageItem: React.FC<MessageItemProps> = ({ avatarUrl, text, id }) => {
  const messageRef = useRef<HTMLDivElement | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView();
    }
  });

  return (
    <div
      className="mb-[20px] flex items-end gap-[10px] w-[fit-content]"
      style={user?.uid === id ? { flexDirection: 'row-reverse', marginLeft: 'auto' } : { marginRight: 'auto' }}
      ref={messageRef}
    >
      <img className="w-[40px] h-[40px] rounded-[50%]" src={avatarUrl} alt="Avatar" />
      <div
        className={styles.messageText}
        style={user?.uid === id ? { backgroundColor: '#2da4f3' } : { backgroundColor: '#3969c1' }}
      >
        {text}
        <div
          className={styles.decoration}
          style={
            user?.uid === id
              ? { right: '-10px', borderBottom: '10px solid #2da4f3' }
              : { left: '-10px', borderBottom: '10px solid #3969c1' }
          }
        ></div>
      </div>
    </div>
  );
};

export default MessageItem;
