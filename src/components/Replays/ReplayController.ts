import { BehaviorSubject } from "rxjs";
import { Replay } from "./Replays";

export class ReplayController {
  private static instance: ReplayController;
  private change: BehaviorSubject<Replay>;

  public static getInstance(): ReplayController {
    if (!ReplayController.instance) {
      ReplayController.instance = new ReplayController();
      ReplayController.instance.change = new BehaviorSubject(null);
    }
    return this.instance;
  }

  public onChange(): BehaviorSubject<Replay> {
    return this.change;
  }

  public setReplay(replay: Replay) {
    this.change.next(replay);
  }

  private constructor() {
  } 
}