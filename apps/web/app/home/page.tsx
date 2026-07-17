import { PageBody, PageHeader } from '@kit/ui/page';

import { DashboardDemo } from '~/home/_components/dashboard-demo';

export default function HomePage() {
  return (
    <>
      <PageHeader description={'Holaaaaaaaa aaaahhhh'} />

      <PageBody>
        <DashboardDemo />
      </PageBody>
    </>
  );
}
