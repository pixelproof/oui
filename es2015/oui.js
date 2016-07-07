import panel from './imperative-api'
import { annotate } from './annotate'
import datoui from './datoui'

import { color } from './controls/colorpicker'
import { combobox } from './controls/combobox'
import { graph } from './controls/graph'
import { xypad } from './controls/xypad'

let oui = panel({label:'Master'})

export default { oui, panel, datoui, annotate, color, combobox, graph, xypad }
