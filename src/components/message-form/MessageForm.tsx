import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import useSound from 'use-sound';

import useAuth from 'hooks/useAuth';
import database from 'firebaseApp';

import send from 'assets/send.svg';
import notification from 'sounds/notification.mp3';

import styles from './MessageForm.module.css';

const MessageForm: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [play] = useSound(notification);
  const { user } = useAuth();

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

      play();
    } catch (error) {
      console.log(error);
    } finally {
      setMessage('');
    }
  };

  console.log(useSound(notification, { volume: 0.5 }));

  return (
    <form className="flex items-end gap-[10px] sm:gap-[20px]" onSubmit={sendMessage}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
      />
      <button className="w-[50px] h-[50px] rounded-[50%] grid place-items-center bg-[#1565c0] transition-all hover:bg-[#5ab1f8]">
        <img src={send} alt="Send" />
      </button>
    </form>
  );
};

export default MessageForm;
