import { ICommonTypes } from "../commonTypes";
import { IVoucherCompaign } from "../voucherCompaign/types";

export type IDonateCompaingAward = {
  _id: string,
  minScore?: number,
  voucherCompaignId?: string
}

export type IDonateCompaign = ICommonTypes & {
  maxScore?: number,
  awards?: IDonateCompaingAward[]
};

// query types
export type DonateCompaignQueryResponse = {
  donateCompaigns: IDonateCompaign[];
  loading: boolean;
  refetch: () => void;
};

export type DonateCompaignRemoveMutationResponse = {
  donateCompaignsRemove: (mutation: {
    variables: { _ids: string[] };
  }) => Promise<any>;
}