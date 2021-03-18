import { IconButton, List, ListItem } from "@material-ui/core";
import { useListActivitiesGoals } from "../../Providers/ListActivitiesGoals";
import PersonalDialog from "./modal";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import FormDialog from "./dialog";
import { useProviderUser } from "../../Providers/User";
import { DivGoalActivities, personalWrapperStyle } from "./styles";
import MenuBar from "../../components/MenuBar";
import GoalsModal from "./goalsModal";
import ActivitiesModal from "./activitiesModal";

const Editable = () => {
  const { group } = useProviderUser();
  const { activitiesGroup, goals, handleActivieDelete, handleGoalDelete } =
    useListActivitiesGoals() || [];

  return (
    <div style={personalWrapperStyle}>
      <MenuBar />
      <h2 style={{ marginTop: "100px" }}>Comunidade</h2>

      <PersonalDialog />

      {group !== null && group !== 26 && (
        <div style={personalWrapperStyle}>
          <DivGoalActivities
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>Metas do grupo</h3>

            <List
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h5 style={{ width: "50%" }}>Metas</h5>

              {goals &&
                goals.map((item, i) => (
                  <ListItem
                    key={i}
                    style={{
                      width: "320px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {item.title}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <IconButton onClick={() => handleGoalDelete(item.id)}>
                        <DeleteForeverIcon style={{ color: "#AA0000" }} />
                      </IconButton>
                      <FormDialog edit={"meta"} id={item.id} />
                    </div>
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
                    <ListItem
                      key={i}
                      style={{
                        justifyContent: "space-between",
                      }}
                    >
                      {item.title}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <IconButton
                          onClick={() => handleActivieDelete(item.id)}
                        >
                          <DeleteForeverIcon style={{ color: "#AA0000" }} />
                        </IconButton>
                        <FormDialog edit={"activitie"} id={item.id} />
                      </div>
                    </ListItem>
                  ))}
              </List>
            </div>

            <FormDialog present={"activitie"} />

            <ActivitiesModal />
          </DivGoalActivities>
        </div>
      )}
    </div>
  );
};

export default Editable;
