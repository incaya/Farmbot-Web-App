import * as React from "react";
import { t } from "i18next";
import { Content } from "../constants";

/** The bottom half of the Sequence editor panel (when no Sequence is selected). */
export function SequenceEditorMiddleInactive({ }: {}) {
  return <div>
    <p>
      {t(Content.NO_SEQUENCE_SELECTED)}
    </p>
    <img
      className="empty-state-graphic"
      src="/app-resources/img/empty-state-sequence.svg" />
  </div>;
}
