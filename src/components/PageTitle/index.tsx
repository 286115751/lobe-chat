import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    document.title = title ? `${title} · Test` : 'Test';
  }, [title]);

  return null;
});

export default PageTitle;
