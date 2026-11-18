# Website recreation prompt — Mante Beach Resort

Create a responsive, single-page promotional website for **Mante Beach Resort**, using the supplied screenshot as the primary visual reference.

## Visual direction
- Reproduce the reference's clean white page centered on a very light gray outer background.
- Keep the narrow, editorial one-page composition and the same order of sections.
- Use bold, heavy, black serif/slab-style uppercase headings; use a simple sans-serif font for contact details and supporting text.
- Preserve the resort's dark blue and golden-orange identity through the supplied logo and promotional artwork.
- Add thin light-gray horizontal divider lines between the major sections.
- Avoid adding a modern navigation bar, gradients, cards with shadows, or decorative elements that are not present in the reference.

## Required sections
1. **Welcome / contact header**
   - Center the heading “WELCOME!” at the top.
   - Place the square Mante Beach Resort logo on the left.
   - On the right, show “MANTE BEACH RESORT”, “LOCATED AT SINDOL SAN FELIPE ZAMBALES”, the email `mantebeachresort@gmail.com`, and phone number `09451004006`.
   - Add a centered “get started!” text link below the logo/contact row that scrolls to the room section.

2. **Promotion**
   - Place the resort rate poster on the left.
   - On the right, show the message in bold uppercase lines:
     “MANTE BEACH RESORT -”
     “SAFE, MURA, AT SULIT!”
     “PERFECT PARA SA BONDING,”
     “PAHINGA, AT”
     “UNFORGETTABLE”
     “MEMORIES. BOOK NOW!”

3. **Rooms**
   - Show three room options in one horizontal row on wider screens, each with its room photo, room title, breakfast/Wi-Fi note, and price range:
     - Ibiza Room — rate for 4 pax — free breakfast, free Wi-Fi — ₱6,400–₱8,000
     - Cabin Suite Room — rate for 3 pax — free breakfast, free Wi-Fi — ₱4,000–₱5,000
     - Cancun Room — rate for 2 pax — free breakfast, free Wi-Fi — ₱6,000–₱7,000
   - Keep the cards visually light: no shadows or heavy borders.

4. **Contact / payment**
   - Place the wide contact banner on the left and the proof-of-payment image on the right.
   - Keep generous white space around both images.

## Responsive behavior
- At the reference width (about 708 px viewport), center a white content column approximately 584 px wide.
- On narrower mobile screens, reduce outer margins, keep the logo and contact information side-by-side where possible, stack the promotion poster and message, and keep the three room cards readable without horizontal overflow.
- Maintain the reference's visual hierarchy and spacing as closely as possible.

## Functionality
- Email links should open an email to `mantebeachresort@gmail.com`.
- Phone links should dial `09451004006`.
- “get started!” should scroll to the room section.
- Each room booking link should open an email with the selected room name and a short booking inquiry prefilled.
- Use semantic HTML, descriptive image alt text, and accessible link labels.

Use the extracted images in the `assets/` folder. Do not replace the provided resort imagery with generic stock photos. Build with plain HTML, CSS, and vanilla JavaScript.
