import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <nav>
        <span id="site-name">* CSS-TRICKS</span>
        <span class="pages">
          <Link href="/archives">articles</Link>
          <Link href="/video-screencasts">videos</Link>
          <Link href="/almanac">almanac</Link>
          <Link href="/newsletter">newsletter</Link>
          <Link href="/guides">guides</Link>
          <Link href="/books">books</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
