# Realty Agent Software

TODO
- [X] Add authentication (Clerk)
- [X] Setup Database (Neon via conn-string)
- [X] Pages
  - [X] Core Entities Pages -> Details Page (Edit Mode)
- [X] Create Table UI Control
- [ ] Endpoints One
  - [ ] people
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
  - [ ] deals
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
  - [ ] leads
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
  - [ ] companies
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
- [ ] Endpoints Two
  - [ ] tasks
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
  - [ ] files
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
  - [ ] notes
    - [ ] GET all
    - [ ] GET one
    - [ ] POST
    - [ ] PUT
- [ ] Complete all necessary UI and controls
- [ ] Complete Landing page

Pages
- Entitys Page -> [Entity Details Page]

Database Schema Description
CRM Core Entities
- User (one Organization) (many Deal) (many Property)
- Organization (many User)
- Person (optional one Company) (one PersonType) (many Deal) (many Note) (many File) (many Property) (many Task)
- Company (many Person) (many Note) (many File) (many Property) (many Task)
- Lead (optional one Person) (optional one Company) (one LeadStatus) (many Note) (many File) (many Task)
- Deal (optional one Person) (optional one Company) (one User) (one DealStatus) (many Note) (many File) (many Contract) (many Invoice) (many Task)
Supporting Entities
- PersonType (many Person)
- DealStatus (many Deal)
- LeadStatus (many Lead)
- Note (optional one Person) (optional one Company) (optional one Lead) (optional one Deal)
- File (optional one Person) (optional one Company) (optional one Lead) (optional one Deal)
- Task (optional one Person) (optional one Company) (optional one Lead) (optional one Deal)
- Contract (one Deal)
- Invoice (one Deal) (many Transaction)
- Transaction (optional one Invoice)
Property Management Core and Supporting Entities
- Property (one User) (optional one Company) (optional one Person) (one PropertyStatus) (one PropertyType) (many PropertyImage) (many PropertyFile)
- PropertyStatus (many Property)
- PropertyType (many Property)
- PropertyImage (one Property)
- PropertyFile (one Property)