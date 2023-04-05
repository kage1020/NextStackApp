import Image from 'next/image'

import { Inter } from 'next/font/google'

import Head from '@/components/Head'

const inter = Inter({ subsets: ['latin'] })

const links = [
  {
    title: 'Docs',
    href: 'https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    context: 'Find in-depth information about Next.js features and API.',
  },
  {
    title: 'Learn',
    href: 'https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    context: 'Learn about Next.js in an interactive course with quizzes!',
  },
  {
    title: 'Template',
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    context: 'Discover and deploy boilerplate example Next.js projects.',
  },
  {
    title: 'Deploy',
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
    context: 'Instantly deploy your Next.js site to a shareable URL with Vercel.',
  },
]

export default function Home() {
  return (
    <>
      <Head />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div className='z-2 flex w-full max-w-[--max-width] items-center justify-between font-mono text-[0.8rem] tablet:text-[0.85rem]'>
          <p className='fixed inset-x-0 bottom-auto top-0 m-0 flex w-full items-center justify-center rounded-none border-b border-[rgba(var(--callout-border-rgb),0.25)] bg-gradient-to-b from-[rgba(var(--background-start-rgb),1)] to-[rgba(var(--callout-rgb),0.5)] bg-clip-padding px-4 pb-[1.4rem] pt-8 backdrop-blur-xl tablet:static tablet:block tablet:w-auto tablet:rounded-xl tablet:border tablet:border-[rgba(var(--callout-border-rgb),0.3)] tablet:bg-[rgba(var(--callout-rgb),0.5)] tablet:bg-clip-border tablet:p-4 tablet:backdrop-blur-none'>
            Get started by editing&nbsp;
            <code className='font-mono font-bold'>src/pages/index.tsx</code>
          </p>
          <div className='pointer-events-none fixed inset-x-0 bottom-0 top-auto z-[1] flex h-[200px] w-full items-end justify-center bg-gradient-to-b from-transparent to-[rgba(var(--background-end-rgb),0.4)] p-8 tablet:pointer-events-auto tablet:static tablet:z-auto tablet:block tablet:h-auto tablet:w-auto tablet:p-0'>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              className='flex items-center justify-center gap-2 p-4 tablet:p-0'
              target='_blank'
              rel='noopener noreferrer'
            >
              By{' '}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className='dark:invert-[1]'
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className='relative flex items-center justify-center px-0 pb-24 pt-32 before:absolute before:left-1/2 before:-ml-[400px] before:h-[300px] before:w-[480px] before:transform-none before:rounded-[50%] before:blur-[45px] before:content-[""] before:[background:var(--secondary-glow)] after:absolute after:left-1/2 after:-z-[1] after:h-[180px] after:w-[240px] after:blur-[45px] after:content-[""] after:[background:var(--primary-glow)] after:[transform:translateZ(0)] tablet:py-16 tablet:before:h-[360px] tablet:before:[transform:translateZ(0)]'>
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert-[1]'
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
          <div className='relative ml-4 flex h-[75px] w-[75px] items-center justify-center overflow-hidden rounded-xl px-[10px] py-[25px] shadow-[0px_2px_8px_-1px_#0000001a] [transform:translateZ(0)] before:absolute before:-z-[1] before:h-[200%] before:w-[200%] before:animate-[6s_rotate_linear_infinite] before:content-[""] before:[background:var(--tile-border)] after:absolute after:inset-0 after:-z-[1] after:rounded-xl after:bg-gradient-to-br after:from-[rgba(var(--tile-start-rgb),1)] after:to-[rgba(var(--tile-end-rgb),1)] after:bg-clip-content after:p-[1px] after:content-[""] motion-reduce:before:animate-none'>
            <Image
              className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert-[1]'
              src='/thirteen.svg'
              alt='13'
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className='mb-[120px] grid w-[--max-width] max-w-xs grid-cols-1 text-center tablet:mb-0 tablet:max-w-[100%] tablet:grid-cols-2 tablet:text-left desktop:grid-cols-4'>
          {links.map((e) => (
            <a
              key={e.title}
              href={e.href}
              className='group rounded-xl border border-[rgba(var(--card-border-rgb),0)] bg-[rgba(var(--card-rgb),0)] px-10 py-4 transition-[background,_border] duration-200 tablet:px-[1.2rem] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[rgba(var(--card-border-rgb),0.15)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[rgba(var(--card-rgb),0.1)]'
              target='_blank'
              rel='noopener noreferrer'
            >
              <h2 className={`${inter.className} mb-2 text-2xl font-semibold tablet:mb-[0.7rem]`}>
                {e.title}{' '}
                <span className='inline-block transition-transform duration-200 ease-[ease] motion-reduce:group-hover:transform-none [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1'>
                  -&gt;
                </span>
              </h2>
              <p
                className={`${inter.className} m-0 max-w-[30ch] text-[0.9rem] leading-normal opacity-60`}
              >
                {e.context}
              </p>
            </a>
          ))}
        </div>
      </main>
    </>
  )
}
