export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8000/products/')
    const repo = await res.json()
    return { props: { repo } }
  }