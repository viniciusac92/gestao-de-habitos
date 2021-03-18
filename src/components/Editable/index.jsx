import { IconButton, List, ListItem, Button } from "@material-ui/core";
import { useListActivitiesGoals } from "../../Providers/ListActivitiesGoals";
import { usePersonal } from "../../Providers/PersonalActivities";
import PersonalDialog from "./modal";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FormDialog from "./dialog";
import { useProviderUser } from "../../Providers/User";
import { DivGoalActivities, personalWrapperStyle } from "./styles";
import MenuBar from "../../components/MenuBar";
import GoalsModal from "./goalsModal";

const Editable = () => {
  const { activities, goalsGroup } = usePersonal() || [];
  const { group } = useProviderUser();
  const { activitiesGroup, goals, handleActivieDelete, handleGoalDelete } =
    useListActivitiesGoals() || [];

  return (
    <div style={personalWrapperStyle}>
      <MenuBar />
      <h2 style={{ marginTop: "100px" }}>Comunidade</h2>

      <PersonalDialog />

      {group !== null  && group !== 26  && (
        <div style={personalWrapperStyle}>
          <DivGoalActivities>
            <h3>Metas do grupo</h3>

            <List style={{ margin: "3%" }}>
              <h5>Metas</h5>

              {goals &&
                goals.map((item, i) => (
                  <ListItem key={i}>
                    {item.title}
                    <IconButton onClick={() => handleGoalDelete(item.id)}>
                      <DeleteForeverIcon />
                    </IconButton>
                    <FormDialog edit={"meta"} id={item.id} />
                  </ListItem>
                ))}
            </List>

            <FormDialog present={"goal"} />

            <GoalsModal />
          </DivGoalActivities>

          <DivGoalActivities>
            <h3>Atividades do grupo</h3>

            <div style={{ margin: "3%" }}>
              <h5>Atividades</h5>

              <List>
                {activitiesGroup &&
                  activitiesGroup.map((item, i) => (
                    <ListItem key={i}>
                      {item.title}
                      <IconButton onClick={() => handleActivieDelete(item.id)}>
                        <DeleteForeverIcon />
                      </IconButton>
                      <FormDialog edit={"activitie"} id={item.id} />
                    </ListItem>
                  ))}
              </List>
            </div>

            <FormDialog present={"activitie"} />

            <h4>Se inspire em atividades criadas pela comunidade</h4>

            {activities &&
              activities.map((item, i) => <p key={i}>{item.title}</p>)}
          </DivGoalActivities>
        </div>
      )}
    </div>
  );
};

export default Editable;
