interface Soldier {
    name: string;
    unit: string;
    commander: string;
    numberOfTeammates: number;
    equipment: string[];
    currentTime: string;
  }
  
  const createSoldierObject = (): Soldier => {
    const soldier: Soldier = {
      name: "John Doe",
      unit: "Alpha Company",
      commander: "Captain Smith",
      numberOfTeammates: 10,
      equipment: ["rifle", "helmet", "body armor"],
      currentTime: new Date().toLocaleTimeString(),
    };
  
    return soldier;
  };
  
  export { Soldier, createSoldierObject };
  