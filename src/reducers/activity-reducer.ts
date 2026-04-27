import type { Activity } from "../types/activities";

export type ActivityActions =
  | { type: "save-activity"; payload: { newActivity: Activity } }
  | { type: "set-activeId"; payload: { id: Activity["id"] } }
  | { type: "delete-activity"; payload: { id: Activity["id"] } }
  | { type: "restart" };

export type ActivityState = {
  activities: Activity[];
  activeId: Activity["id"];
};


const localStorageActivities = () => localStorage.getItem("activities") ? JSON.parse(localStorage.getItem("activities") || "") : [];

export const initialState: ActivityState = {
  activities: localStorageActivities() || [],
  activeId: "",
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions,
) => {
  switch (action.type) {
    case "save-activity":
      const updateActivities = state.activeId
        ? state.activities.map((activity) =>
            activity.id === state.activeId
              ? action.payload.newActivity
              : activity,
          )
        : [...state.activities, action.payload.newActivity];

      return {
        ...state,
        activities: updateActivities,
        activeId: "",
      };
    case "set-activeId":
      return {
        ...state,
        activeId: action.payload.id,
      };
    case "delete-activity":
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== action.payload.id,
        ),
      };
    case "restart":
      return {
        activities: [],
        activeId: "",
      };
  }
  return state;
};
