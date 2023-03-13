import { useEffect, useRef } from 'react';

import MessageItemProps from 'types/props/MessageItemProps';
import useAuth from 'hooks/useAuth';
import useTheme from 'hooks/useTheme';

import styles from './MessageItem.module.css';

const MessageItem: React.FC<MessageItemProps> = ({ avatarUrl, text, id }) => {
  const messageRef = useRef<HTMLDivElement | null>(null);
  const { user } = useAuth();
  const { theme } = useTheme();

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
        style={
          user?.uid === id
            ? { backgroundColor: `${theme === 'light' ? '#2dabff' : '#8d7df3'}` }
            : { backgroundColor: `${theme === 'light' ? '#085fc2' : '#4c428c'}` }
        }
      >
        {text}
        <div
          className={styles.decoration}
          style={
            user?.uid === id
              ? { right: '-10px', borderBottom: `10px solid ${theme === 'light' ? '#2dabff' : '#8d7df3'}` }
              : { left: '-10px', borderBottom: `10px solid ${theme === 'light' ? '#085fc2' : '#4c428c'}` }
          }
        ></div>
      </div>
    </div>
  );
};

export default MessageItem;
