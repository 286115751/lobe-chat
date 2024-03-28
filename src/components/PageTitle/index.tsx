import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · 逻辑盒AI` : '逻辑盒AI';
  }, [title]);

  return null;
});

export default PageTitle;
