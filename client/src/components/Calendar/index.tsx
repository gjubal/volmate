import React from 'react';

import { Container, DayColumn, EmployeeRow, Header, WeekGrid } from './styles';

const Calendar: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Current schedule</h1>
      </Header>
      <main>
        <form>
          <fieldset>
            <WeekGrid>
              <DayColumn>
                <h3>Monday 29</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>

              <DayColumn>
                <h3>Tuesday 30</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>

              <DayColumn>
                <h3>Wednesday 31</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>

              <DayColumn>
                <h3>Thursday 01</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>

              <DayColumn>
                <h3>Friday 02</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>

              <DayColumn>
                <h3>Saturday 03</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>

              <DayColumn>
                <h3>Sunday 04</h3>
                <EmployeeRow>
                  <span>
                    <strong>Gabriel</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Gui</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
                <EmployeeRow>
                  <span>
                    <strong>Ligia</strong> - Manager
                  </span>
                  <p>9:30 AM - 5:00 PM</p>
                </EmployeeRow>
              </DayColumn>
            </WeekGrid>
          </fieldset>
        </form>
      </main>
    </Container>
  );
};

export default Calendar;
