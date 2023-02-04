import Link from 'next/link';
import styles from '../styles/authForm.module.scss';

export default function SignUpPage() {
  return (
    <div className={styles.auth}>
      <h2>Sign up</h2>

      <form>
        <input
          type='text'
          placeholder='Email'
        />
        <input
          type='password'
          placeholder='Password'
        />
        <button>Sign up</button>
      </form>

      <div className={styles.alternative}>
        <p>Have an account?</p>
        <Link
          href='login'
          className={styles.redirect}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
