import '../component/assets/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {typeof window !== "undefined" ? <Component {...pageProps} /> : ""}
    </>
  )
}

export default MyApp
