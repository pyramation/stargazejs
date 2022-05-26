import * as _126 from "../stargaze/alloc/v1beta1/genesis";
import * as _127 from "../stargaze/alloc/v1beta1/params";
import * as _128 from "../stargaze/alloc/v1beta1/query";
import * as _129 from "../stargaze/alloc/v1beta1/tx";
import * as _130 from "../stargaze/claim/v1beta1/claim_record";
import * as _131 from "../stargaze/claim/v1beta1/genesis";
import * as _132 from "../stargaze/claim/v1beta1/params";
import * as _133 from "../stargaze/claim/v1beta1/query";
import * as _134 from "../stargaze/claim/v1beta1/tx";
import * as _185 from "../stargaze/alloc/v1beta1/tx.amino";
import * as _186 from "../stargaze/claim/v1beta1/tx.amino";
import * as _187 from "../stargaze/alloc/v1beta1/tx.registry";
import * as _188 from "../stargaze/claim/v1beta1/tx.registry";
export namespace publicawesome {
  export namespace stargaze {
    export namespace alloc {
      export const v1beta1 = { ..._126,
        ..._127,
        ..._128,
        ..._129,
        ..._185,
        ..._187
      };
    }
    export namespace claim {
      export const v1beta1 = { ..._130,
        ..._131,
        ..._132,
        ..._133,
        ..._134,
        ..._186,
        ..._188
      };
    }
  }
}