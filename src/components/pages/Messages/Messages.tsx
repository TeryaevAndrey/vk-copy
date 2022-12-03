import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import React, {FC} from 'react';
import { IMessage, IPost } from '../../../types';
import { useAuth } from '../../providers/useAuth';
import { initialPosts } from '../Home/InitialPosts';

const Messages:FC = () => {
  const { db, user } = useAuth();
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [error, setError] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  React.useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (doc) => {
      doc.forEach((d: any) => {
        setMessages(prev => [...prev, d.data()]);
      })
    });

    return () => {
      unsub();
    };
  }, []);

  const addMessageHandler = async(e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" && user) {
      try {
        await addDoc(collection(db, "messages"), {
          user, 
          message
        });

      } catch (err: any) {
        setError(err);
      }

      setMessage("");
    }
  };


  return (
    <div>
      Messages
    </div>
  );
};

export default Messages;