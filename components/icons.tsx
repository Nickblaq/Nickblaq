import {
  AlertTriangle,
  ArrowRight,
  Book,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  Eye,
  File,
  Folder,
  FileText,
  FileBox,
  HelpCircle,
  Home,
  Image,
  Laptop,
  Loader2,
  LucideProps,
  Moon,
  MoreVertical,
  PersonStanding,
  Pencil,
  Pizza,
  Plus,
  Settings,
  SunMedium,
  Timer,
  Trash,
  Twitter,
  Workflow,
  User,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  book: Book, 
  logo: Command,
  close: X,
  eye: Eye,
  filebox: FileBox,
  home: Home,
  folder: Folder,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  post: FileText,
  File: File,
  person: PersonStanding,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pencil: Pencil,
  pizza: Pizza,
  sun: SunMedium,
  timer: Timer,
  moon: Moon,
  laptop: Laptop,
  workflow: Workflow,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  bridge: ({ ...props }: LucideProps) => (
    <svg
    aria-labelledby="conf-city-title"
    fill="none"
    role="img"
    viewBox="0 0 620 704"
    width="620"
    height="704"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="conf-city-title">
      Line drawing of the Golden Gate Bridge in San Francisco.
    </title>
    <path d="M372.5 299.5L616.5 335" stroke="currentColor" />
    <path
      d="M370 16.5C429.833 101.833 562.9 284 616.5 330"
      stroke="currentColor"
    />
    <path
      d="M329.5 34.5L325 36L322 38C321.333 38.5 320 39.6 320 40C320 40.4 319.333 41.1667 319 41.5L318.5 45.5V72L322.5 73M329.5 34.5C336.667 34 351.1 33 351.5 33C351.9 33 354 33.3333 355 33.5L356.5 34.5L358 36L358.5 38L358 70L357.5 70.5L354 72L350.5 73.5H330L322.5 73M329.5 34.5L324.5 38L323.5 40.5L322.5 43.5V73"
      stroke="currentColor"
    />
    <path d="M321 315V397H356.5" stroke="currentColor" />
    <path
      d="M332 234L329 240L328 241V245H327V251H326.5V261.5L325.5 262V289.5"
      stroke="currentColor"
    />
    <path
      d="M-0.5 158.5L27 171.5L43.5 190L48.5 202L85 218.5L95.5 246.5C98.1667 254.333 103.7 270.6 104.5 273C105.5 276 117 291 119 294.5C121 298 125.5 307 127 310C128.5 313 142 324.5 145 328C147.4 330.8 154.333 338.833 157.5 342.5L164 358C167.5 362 174.9 370.5 176.5 372.5C178.5 375 191 386.5 193.5 390C196 393.5 200.5 403 202 405.5C203.2 407.5 205.5 415 206.5 418.5C207.833 422.833 210.7 432 211.5 434C212.3 436 216.833 451.5 219 459C221.333 464.5 226 476.6 226 481C226 486.5 223.5 497.5 223.5 500C223.5 502.5 222 503 230.5 512.5C239 522 245.5 529.5 247 532C248.2 534 255.5 546.5 259 552.5"
      stroke="currentColor"
    />
    <path
      d="M164 357.5L206 353L237.5 345.5C242.667 345.5 254.5 345.5 260.5 345.5C268 345.5 277.5 342 279.5 341C281.1 340.2 289.5 337 293.5 335.5H305H309.5"
      stroke="currentColor"
    />
    <path
      d="M309.5 314V399.5L306 402V411.5L303 414.5V433H262.5V440.5H420.5V433H381.5L380 416.5H375.5V402L373 400.5L372 184.5L370 15H371V11L369.5 10.5L366 6V3L364.5 1L363.5 2.5L363 6C308.667 47.5 163.6 137.8 18 167"
      stroke="currentColor"
    />
    <path
      d="M352.5 14C347.333 14.6667 334.3 15.8 323.5 15C321.9 12.6 320.5 11 320 10.5V6L318.5 4.5L316.5 6V10C276.667 42 158 116.7 2 159.5"
      stroke="currentColor"
    />
    <path
      d="M313 14V69.5L311.5 71.5V131.5L310 133V207L309 208.5V287"
      stroke="currentColor"
    />
    <path
      d="M321 288.5V261.5H323V250.5H324.5V244H325.5V241L329.5 234.5L334.5 233.5H351L352 237.5L353.5 238.5L354 243L355 244.5V249L355.5 250.5L356 259.5V292.5L355.5 328.5L356.5 330.5V334V397.5"
      stroke="currentColor"
    />
    <path d="M214 440.5H262.5M420.5 440.5H622" stroke="currentColor" />
    <path d="M404 475L427.059 474L453 475" stroke="currentColor" />
    <path d="M585 454L594.882 453L606 454" stroke="currentColor" />
    <path d="M543 450L552.882 449L564 450" stroke="currentColor" />
    <path d="M339 511.5L379.5 508L424 511.5" stroke="currentColor" />
    <path d="M339 577L393.318 573L453 577" stroke="currentColor" />
    <path d="M453 703L547.818 695L652 703" stroke="currentColor" />
    <path d="M460 536L505.741 533L556 536" stroke="currentColor" />
    <path d="M508 467L531.347 465L557 467" stroke="currentColor" />
    <path d="M315 455L338.347 453L364 455" stroke="currentColor" />
    <path d="M449 453L464.247 451L481 453" stroke="currentColor" />
    <path d="M252 487L275.347 484L301 487" stroke="currentColor" />
    <path
      d="M277.5 552.5L209.5 550L109.5 571L46 584.5L9.5 604H-22"
      stroke="currentColor"
    />
    <path
      d="M355.5 318.5L117.5 293M113 286.5L355.5 313.5M373 315L616.5 346.5M373 321L567.5 346.5"
      stroke="currentColor"
    />
    <path d="M100.5 262L356 293M372.5 295L616 331.5" stroke="currentColor" />
    <path
      d="M372.5 330L388 328.5L401.5 329.5L411 328.5C413.167 328.5 417.6 328.5 418 328.5C418.4 328.5 423.833 328.167 426.5 328"
      stroke="currentColor"
    />
    <path
      d="M513 440.5V433H568M568 433V346.5H616.5V320H622M568 433H622M591 433V364.5H595.5M604.5 433V364.5H595.5M595.5 364.5V433"
      stroke="currentColor"
    />
    <path
      d="M323 165.5V208L328 209C334.5 209.167 347.6 209.4 348 209C348.4 208.6 350.833 208.5 352 208.5L356.5 204.5V199.5L356 198.5V195.5L357 195V170L355.5 168.5V164.5L355 163V160.5L351.5 156.5H331.5L329 159L326.5 159.5L325.5 161.5L324 162.5V165L323 165.5Z"
      stroke="currentColor"
    />
    <path
      d="M329 159L327.5 162.5V166L326 166.5V171.5L325.5 172.5L326 208.5"
      stroke="currentColor"
    />
    <path
      d="M333.5 92.5L326 93.5L324 95L322.5 96V98V100.5H321V103L319.5 104.5V132L324 134M333.5 92.5H354.5L357 95V97.5L357.5 99V129L356.5 130L356 132L353 133L349.5 134H324M333.5 92.5L327 94.5L326 97L325.5 101.5L324.5 102.5V105.5L324 107V134"
      stroke="currentColor"
    />
    <path d="M371 87C472.6 225.4 545 303 568.5 324.5" stroke="currentColor" />
    <path d="M334.5 34C339 41.1667 350 58.2 358 69" stroke="currentColor" />
    <path
      d="M326 315.5L334.5 324V329.5L321.5 346M335.5 316.5L340 322L344 317.5M351.5 318L346 324V329.5L356.5 342M340 332.5L328 347.5H352.5L340 332.5Z"
      stroke="currentColor"
    />
    <path
      d="M321 390L334.5 377L334.5 371.5L321 354.5M322 397L340 379L354.5 397M356.5 390L346 377L346 371.5L356.5 359.5M340 368.5L328 353.5L352.5 353.5L340 368.5Z"
      stroke="currentColor"
    />
    <path d="M325.5 315.5V341" stroke="currentColor" />
    <path d="M325.5 360V385.5" stroke="currentColor" />
    <path d="M355.5 310.5L123 283.5V270L356 297.5" stroke="currentColor" />
    <path d="M372.5 311.5L616.5 344" stroke="currentColor" />
    <path d="M86.5 149V222" stroke="currentColor" />
    <path d="M122 137V265" stroke="currentColor" />
    <path d="M155 124V268" stroke="currentColor" />
    <path d="M188 109L188 273" stroke="currentColor" />
    <path d="M220 93L220 276.5" stroke="currentColor" />
    <path d="M251 77L251 280" stroke="currentColor" />
    <path d="M281 60L281 284" stroke="currentColor" />
    <path d="M391 46L391 298" stroke="currentColor" />
    <path d="M417 82L417 302" stroke="currentColor" />
    <path d="M441 115L441 305" stroke="currentColor" />
    <path d="M465 147L465 309" stroke="currentColor" />
    <path d="M488 178L488 312" stroke="currentColor" />
    <path d="M511 208L511 316" stroke="currentColor" />
    <path d="M532 235L532 319" stroke="currentColor" />
    <path d="M553 261L553 322" stroke="currentColor" />
    <path d="M571 282L571 325" stroke="currentColor" />
  </svg>
  ),
  twitter: Twitter,
  check: Check,
}
