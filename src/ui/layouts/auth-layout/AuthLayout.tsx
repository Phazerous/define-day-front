import Router, { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUsername } from '../../../lib/userApi';

interface LayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: LayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathName = router.pathname.replace('/', '');
    const routesWithNoAuth = ['signup', 'login'];

    const validate = async () => {
      return await getUsername();
    };

    validate().then((res) => {
      const onAuthPage = routesWithNoAuth.includes(pathName);
      const isAuthorized = !!res;

      if (!isAuthorized && !onAuthPage) router.push('login');
      else if (isAuthorized && onAuthPage) router.push('home');
      else setLoading(false);
    });
  });

  if (!loading) return <>{children}</>;

  return <></>;
}
