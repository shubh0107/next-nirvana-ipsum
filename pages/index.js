import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
import nirvanaLogo from '../public/nirvana-logo.png';

export default function Home() {

  const [ipsumLength, setIpsumLength] = useState(1);
  return (
    <div className="bg-black flex flex-col min-h-screen antialiased">
      <Head>
        <title>Nirvana Ipsum</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="max-w-4xl mx-auto text-[#FFE900] font-oswald">
        <h1 className="w-full text-6xl flex justify-center items-center">
          <span className="w-3/4">
            <Image src={nirvanaLogo} height="200" width="400" />
          </span>
          Ipsum
        </h1>


        <div className="flex gap-x-4">
          <LengthInputField value={ipsumLength} onChange={setIpsumLength} />
          <TypeSelector />
          <Button>
            Generate
          </Button>
          <Button className="ml-auto">
            Copy
          </Button>
        </div>


      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">

      </footer> */}
    </div>
  )
}



const Button = props => {
  const { children, className } = props;
  return <button className={`min-h-[30px] inline-flex items-center border border-[#FFE900] rounded-md uppercase tracking-wider px-4 text-[#FFE900] hover:bg-[#FFE900] hover:text-black ${className}`}>
    {children}
  </button >
}

const TypeSelector = props => {
  return <select name="ipsumType" id="ipsum-type" className="min-h-[30px] inline-flex items-center px-2 bg-black border border-[#FFE900] rounded-md">
    <option value="Words">Words</option>
    <option value="Sentences">Sentences</option>
    <option value="Paragraphs">Paragraphs</option>
  </select>
}

const LengthInputField = props => {
  const { value, onChange } = props;
  return (
    <input
      type="number"
      name="ipsum-length"
      className="min-h-[30px] w-auto px-2 bg-black border border-[#FFE900] rounded-md"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}