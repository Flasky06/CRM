import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  //
}

export default function Logo(props: LogoProps) {
  return (
    <div className='text-white text-lg bold'>Tritva CRM</div>
  );
}
