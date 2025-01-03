"use client";

import { useState } from "react";
import { DemoBf, DemoAf } from "src/assets/icons";
import { teamData } from "src/constants/teamData";
import { postTeamVote } from "@api/vote";
import { Teams } from "src/types/teams";

export default function TeamVoting() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const teams: Teams = teamData;

  const handleVote = async () => {
    if (!selectedTeam) return;
    const userId = localStorage.getItem("userId");
    const teamId = teams[selectedTeam]?.id;
    if (!userId || !teamId) return;

    try {
      await postTeamVote(Number(userId), teamId);
      localStorage.setItem("isVotingTeam", "true");
    } catch (error) {
      console.error("투표 실패: ", error);
    }
  };

  return (
    <>
      <div className="h-[11.3rem] ml-[13%]">
        <div className="flex flex-col gap-8 w-fit ">
          {Object.keys(teams).map((team) => (
            <div key={team} className="relative group">
              <div
                className={`w-14 h-14 absolute -top-4 left-5 rounded-full bg-[#AAD2FF] blur-md transition-opacity 
            ${
              selectedTeam === team
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            }`}
              />
              <div
                className="relative Body_1_bold text-center cursor-pointer"
                onClick={() => setSelectedTeam(team)}
              >
                {team}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="self-end mr-[10%] relative w-[12.6rem]">
        {selectedTeam ? <DemoAf /> : <DemoBf />}
        <span className="Body_2_med absolute top-[7.1rem] right-[4.56rem]">
          DEMO - DAY
        </span>
        {selectedTeam && (
          <button
            onClick={handleVote}
            className="Body_2_med absolute top-12 right-8 bg-black hover:bg-gradient-to-r from-[#1B7BE8] to-[#E5DCB7] bg-clip-text text-transparent "
          >
            투표하기 &gt;
          </button>
        )}
      </div>
    </>
  );
}