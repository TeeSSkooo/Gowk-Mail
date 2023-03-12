import MessageItemProps from 'types/props/MessageItemProps';
import useAuth from 'hooks/useAuth';

const MessageItem: React.FC<MessageItemProps> = ({ avatarUrl, text, id }) => {
  const { user } = useAuth();

  return (
    <div
      className="mb-[20px] flex items-end gap-[10px] w-[fit-content]"
      style={user?.uid === id ? { flexDirection: 'row-reverse', marginLeft: 'auto' } : { marginRight: 'auto' }}
    >
      <div>
        <img className="w-[40px] h-[40px] rounded-[50%]" src={avatarUrl} alt="Avatar" />
      </div>
      <div
        className="p-[10px] min-h-[40px] max-w-[400px] break-words rounded-[7px] text-white"
        style={user?.uid === id ? { backgroundColor: '#2196f3' } : { backgroundColor: '#3969c1' }}
      >
        {text}
      </div>
    </div>
  );
};

export default MessageItem;
