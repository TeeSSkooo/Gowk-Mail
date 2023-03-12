import React, { useEffect, useState } from 'react';
import { addDoc, collection, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import MessageItem from 'components/message-item/MessageItem';

import useAuth from 'hooks/useAuth';
import database from 'firebaseApp';

import send from 'assets/send.svg';

import styles from './ChatRoom.module.css';

const ChatRoom: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const { user } = useAuth();

  const [messages] = useCollectionData(query(collection(database, 'messages'), orderBy('createdAt')));

  useEffect(() => console.log(messages));

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.currentTarget.value);
  };

  const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!message) return;

    try {
      await addDoc(collection(database, 'messages'), {
        senderName: user?.displayName,
        senderAvatar: user?.photoURL,
        id: user?.uid,
        text: message,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    } finally {
      setMessage('');
    }
  };

  return (
    <div className="min-h-full py-[30px] bg-[url('assets/chat-bg.svg')]">
      <div className="chat-container">
        <div className={styles.chatField}>
          {messages?.map((message) => (
            <MessageItem avatarUrl={message?.senderAvatar!} text={message.text} id={message.id} key={message.id} />
          ))}
        </div>
        <form className="flex items-end gap-[30px]" onSubmit={sendMessage}>
          <input
            className={styles.input}
            type="text"
            placeholder="Type your message..."
            value={message}
            onChange={handleChange}
          />
          <button className="basis-[50px] w-[50px] h-[50px] rounded-[50%] grid place-items-center bg-[#2196f3] transition-all hover:bg-[#5ab1f8]">
            <img src={send} alt="Send" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
