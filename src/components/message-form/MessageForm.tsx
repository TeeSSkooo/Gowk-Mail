import { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import useAuth from 'hooks/useAuth';
import useTheme from 'hooks/useTheme';
import database from 'firebaseApp';

import send from 'assets/send.svg';

import styles from './MessageForm.module.css';

const MessageForm: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const { user } = useAuth();
  const { theme } = useTheme();

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
    <form className="flex items-end gap-[10px] sm:gap-[20px]" onSubmit={sendMessage}>
      <input
        className={styles.input}
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleChange}
        style={{ backgroundColor: `${theme === 'light' ? '#085fc2' : '#4c428c'}` }}
      />
      <button
        className="w-[50px] h-[50px] rounded-[50%] grid place-items-center"
        style={{ backgroundColor: `${theme === 'light' ? '#085fc2' : '#4c428c'}` }}
      >
        <img src={send} alt="Send" />
      </button>
    </form>
  );
};

export default MessageForm;
