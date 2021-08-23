import React from 'react';

import PageHeader from '../../components/PageHeader';
import VolunteerCard from '../../components/VolunteerCard';
import ListSelect from '../../components/ListSelect';
import ListInput from '../../components/ListInput';
import { Container, Form } from './styles';

const VolunteerList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Available volunteers">
        <Form>
          <ListSelect
            name="department"
            label="Department"
            options={[
              { value: 'Biological_sciences', label: 'Biological sciences' },
              { value: 'Computing', label: 'Computing' },
              { value: 'Engineering', label: 'Engineering' },
              { value: 'English', label: 'English' },
              { value: 'Mathematics', label: 'Mathematics' },
              { value: 'Social_sciences', label: 'Social sciences' },
            ]}
          />
          <ListSelect
            name="status"
            label="Status"
            options={[
              { value: 'Approved', label: 'Approved' },
              { value: 'Pending', label: 'Pending' },
              { value: 'Approved/Pending', label: 'Approved/Pending' },
              { value: 'Disapproved', label: 'Disapproved' },
              { value: 'Inactive', label: 'Inactive' },
              { value: 'All', label: 'All' },
            ]}
          />
          <ListSelect
            name="week_day"
            label="Day"
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />

          <ListInput name="time" label="Time" type="time" />
        </Form>
      </PageHeader>

      <main>
        <VolunteerCard />
        <VolunteerCard />
        <VolunteerCard />
      </main>
    </Container>
  );
};

export default VolunteerList;
