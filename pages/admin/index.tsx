import { useRouter } from 'next/router';
import React, {useEffect} from 'react'
import Layout from '../../components/Layout';

const Home = () => {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/admin/events');
  }, [router])

  return (
      <div>Home</div>
  
  )
}

export default Home;