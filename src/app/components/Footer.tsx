import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState('● Concectando con el servidor.');

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API}/ping`)
      .then((res) => {
        if (res.data && res.data.response === 'ok') {
          setStatus(true);
          setMessage('● Servidor funcionando.');
        }
      })
      .catch(() => setMessage('● Error al conectar.'));
  }, []);

  return (
    <footer className={`flex w-full justify-end items-center font-semibold ${status ? ' text-blue-600' : ' text-amber-600'}`}>
      <span>
        {
          message
        }
      </span>
    </footer>
  );
}
