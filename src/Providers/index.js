import { UserProvider } from "./User";
import { GroupProvider } from './Group'
import { HabitsProvider} from './Habits'

const Providers = ({ children }) => {
  return (
        <HabitsProvider>
          <GroupProvider>
            <UserProvider>
              {children}
            </UserProvider>
          </GroupProvider>
        </HabitsProvider>
  );
};

export default Providers;
