import { assignUnitUser } from './../repositories/unit.repository';
import {
  getUnits,
  IUnitPayload,
  createUnit,
  getUnit,
  deleteUnit,
  createMaintenanceRequest,
} from "../repositories/unit.repository";
import { MaintenanceRequest, Unit } from "../models";
import { IMaintenancePayload } from "src/models/maintenanceRequest";

export default class UnitController {
  public async getUnits(): Promise<Array<Unit>> {
    return getUnits();
  }

  public async createUnit(body: IUnitPayload): Promise<Unit> {
    return createUnit(body);
  }
  public async createMaintenanceRequest(
    id: string,
    body: IMaintenancePayload
  ): Promise<MaintenanceRequest | string> {
    return createMaintenanceRequest(Number(id), body);
  }
    
    public async assignUnitUser(id: string, payload: string) {
        return assignUnitUser(Number(id), Number(payload));
    }
  public async getUnit(id: String): Promise<Unit | null> {
    return getUnit(Number(id));
  }

  public async deleteUnit(id: String): Promise<string> {
    return deleteUnit(Number(id));
  }
}
