import { useState } from 'react';

export default function CopyButton({ url }: { url: string }) {
  const [copyText, setCopyText] = useState('📋');
  return (
    <button
      type="button"
      className='hover:bg-bgBase hover:shadow-lg border-solid border-[1px] text-2xl border-zinc-200 rounded-md p-1 transition-all'
      onClick={() => {
        navigator.clipboard
          .writeText(url)
          .then(() => {
            setCopyText('✅');
            setTimeout(() => {
              setCopyText('📋');
            }, 2000);
          });
      }}
    >
      {copyText}
    </button>
  );
}
