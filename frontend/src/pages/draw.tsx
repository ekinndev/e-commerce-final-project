import { useEffect, useRef, useState } from 'react';
import { socket } from '../lib/socket';

const Draw = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<{ id: string; name: string }[]>([]);
  const [drawUser, setDrawUser] = useState<{ id: string; name: string }[]>([]);

  const joinDraw = () => {
    socket.emit('joinRoom', { name: inputRef.current?.value });
  };
  const drawAnUser = () => {
    socket.emit('draw');
  };
  const clearUsers = () => {
    socket.emit('clear');
  };

  useEffect(() => {
    const onWelcome = (data: any) => {
      console.log(data);
    };
    const onJoinedUser = (data: any) => {
      console.log(data);
    };
    const onUserList = (data: any) => {
      setState(data);
    };
    const onDrawUser = (data: any) => {
      setDrawUser([data]);
    };

    socket.on('hello', onWelcome);
    socket.on('joinedUser', onJoinedUser);
    socket.on('userList', onUserList);
    socket.on('drawedUser', onDrawUser);

    return () => {
      socket.off('hello', onWelcome);
      socket.off('joinedUser', onJoinedUser);
      socket.off('userList', onUserList);
      socket.off('drawedUser', onDrawUser);
    };
  }, []);

  useEffect(() => {
    const getUserList = () => {
      socket.emit('getUserList');
    };
    getUserList();
  }, []);

  return (
    <>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-xl">
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Çekilişe Hoş Geldiniz</h1>
          </div>
          <div>
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto_m.png"
              alt=""
            />
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name</label>
            <div>
              <input
                ref={inputRef}
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
              />
            </div>
          </div>
          <div>
            <button
              onClick={drawAnUser}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              Şanslı Kişiyi Çek
            </button>
            <button
              onClick={joinDraw}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              <i className="mdi mdi-lock-outline mr-1"></i> Çekilişe Katıl
            </button>
            <button
              onClick={clearUsers}
              className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
            >
              Temizle
            </button>
          </div>
          <div>
            <h2>Çekilişe Katılanlar</h2>
            {state.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}

            {drawUser[0] && <div>Arabayı Kazanan Talihli {drawUser[0].name}</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Draw;
