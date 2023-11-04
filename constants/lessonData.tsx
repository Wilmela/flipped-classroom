import React from "react";
import {
  student,
  l1,
  go1,
  go2,
  go3,
  dr1,
  dr3,
  dr2,
  dr4,
  dr5,
  dr6,
  dr7,
  dr8,
  dr9,
  dr10,
  dr12,
  dr13,
  dr14,
  dr15,
  mi1,
  mi2,
  mi3,
} from "../assets/images";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageProps,
} from "react-native";
import { COLORS, FONTS, SIZES } from "./theme";
import { StyledText } from "../components";

const HeadingText = ({ text }: { text: string }) => (
  <StyledText family={FONTS.Bold} size={SIZES.large} text={text} />
);
const Caption = ({ text }: { text: string }) => (
  <Text
    style={{
      fontFamily: FONTS.Medium,
      fontSize: SIZES.normal - 4,
      fontStyle: "italic",
      color: "#333",
      textAlign: "justify",
    }}
  >
    {text}
  </Text>
);
const SubHeadingText = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{
      fontFamily: FONTS.Light,
      fontSize: SIZES.normal + 4,
      color: COLORS.APP_ASH,
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);
const SubHeadingText2 = ({ text }: { text: string }) => (
  <StyledText family={FONTS.Bold} size={SIZES.large - 10} text={text} className="my-2" />
);
const Content = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{
      fontFamily: FONTS.Light,
      fontSize: SIZES.normal + 2,
      color: COLORS.APP_ASH,
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);

const Container = ({ children }: { children: React.ReactNode }) => {
  return <View style={{ width: "100%", height: "auto" }}>{children}</View>;
};

const ContentImg = ({ url, mv }: { url: ImageProps; mv?: number }) => {
  const { height } = useWindowDimensions();

  return (
    <Image
      source={url}
      resizeMode="contain"
      style={{
        width: "100%",
        height: height * 0.55,
        marginVertical: mv || -150,
      }}
    />
  );
};

export default [
  // Cutting
  {
    topic: "Cutting Operations",
    bgImg: go1,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Metal cutting or machining is the process of producing work piece by
          removing unwanted material from a block of metal, in the form of
          chips.
          {"\n"}
          {"\n"}
          This process is most important because almost all products get their
          final shape and size directly or indirectly by machining. Its major
          drawback is that in this process there is a lot of material lost in
          the form of chips.
        </SubHeadingText>
        <SubHeadingText2 text="Mechanics of chip Formation" />
        <Content>
          A wedge shaped tool is made to move relative to the work piece.
          As the tool makes contact with the work piece it exerts pressure on it
          resulting in compression of the metal near the tool tip.
          This induces shear-type deformation within the metal and it starts
          moving upward along the face of the tool.
          As the tool advances this process of shearing goes on increasing and
          material is removed.
        </Content>
        <SubHeadingText2 text="Single Point Cutting Tool:" />
        <Content>
          It consist of a sharpened cutting edge called its point.
          {`\n`}
          1. The point is bounded by the face, the side flank, the end flank and
          the base.
          {`\n`}
          2. The side cutting edge is formed by intersection of face and side
          flank.
          {`\n`}
          3. The end cutting edge is formed by intersection of face and end
          flank.
          {`\n`}
          4. The point where end and side cutting edge meets is called the nose
          of the tool.
        </Content>

        <SubHeadingText2 text="Tool Designation " />
        <Content>
          By designation or nomenclature of the tool we mean the designation of
          the shape of the tool. There are two systems widely used for tool
          designation:
          ASA System (America standards association system) or ANSI System and
          (American National standards institute system). ORS (Orthogonal Rake
          System).
        </Content>

        <SubHeadingText2 text="Types of Rake" />
        <Content>
          a. Positive rake is used while machining low strength ferrous and
          non-ferrous materials, when machining long shafts of low diameters,
          when the set up lacks strength and rigidity or when cutting is done at
          low speed.
          {"\n"}
          b. Negative rake required while machining high strength alloys, when
          there are high impact loads, when there are highly rigid set-ups or
          when cutting is done at high speeds.
          {"\n"}
          c. Zero rake.
        </Content>
        <SubHeadingText2 text="Methods of Machining" />
        <Content>
          In the cutting operation the tool is wedge shape and has straight
          cutting edge. Basically, there are two methods of metal cutting
          depending g upon the arrangement of the cutting edge w.r.t the
          direction of relative work motion:
          {"\n"}
          1. Orthogonal cutting
          {"\n"}
          2. Oblique cutting
        </Content>
        <SubHeadingText2 text="Chips and its Types " />
        <Content>
          The waste/dust material produced while machining any surface is termed
          as chip. Depending on the work piece material and the cutting
          conditions, the following types of chip formation can be
          distinguished.
          {"\n"}
          1. Continuous chips
          {"\n"}
          2. Discontinuous chips
          {"\n"}
          3. Continuous chips with built up edges (BUE)
        </Content>
        <SubHeadingText2 text="Force on a Single Point Tool" />

        <Content>
          The work material offers resistance to the cutting tool, during metal
          cutting.
          The resistance is overcome by the cutting force applied to the tool
          face.
          The work done by this force in cutting is expended in shearing the
          chip from the work, deforming the chip and overcoming the friction of
          the chip on the tool face and tool flank on the cutting surface.
          Magnitude of this force depends upon:
          {"\n"}
          -Material being machined
          {"\n"}- tool angles
          {"\n"}- rate of feed
          {"\n"}- cutting speed
          {"\n"}- depth of cut
          {"\n"}- coolant used.
        </Content>
      </>
    ),
  },

  // Lathe
  {
    topic: "Lathe Machine Operations",
    bgImg: l1,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          In this lesson, we will learn about what are the different types of
          lathe machine operations performed on the lathe machine. Lathe machine
          performs the different operations such as turning, facing, taper
          turning, knurling, grooving, parting off, thread cutting, reaming etc.
          {"\n"}
          {"\n"}
          To perform different lathe machine operations on a lathe, the
          workpiece may be supported and driven by any one of the following
          methods:
          {"\n"}
          1. Workpiece held between centers and tool driven by carriers and
          catch plates.
          {"\n"}
          2. Workpiece held on a mandrel which is supported between centers and
          driven by carriers and catch plates.
          {"\n"}
          3. Held and driven by chuck with the other end supported on the
          tailstock center.
          {"\n"}
          4. Held and driven by a chuck or a faceplate or an angle plate.
          {"\n"}
          The above methods of holding the work may be classified under two
          heading:
          {"\n"}
          {"\n"}
          1. Workpiece held between centers.
          {"\n"}
          2. Workpiece held by a chuck or any other fixtures.
          {"\n"}A lathe is a machine that rotates the workpiece about an axis to
          perform different operations such as turning, facing, taper turning,
          knurling, grooving, parting off, thread cutting, reaming, etc.
        </SubHeadingText>

        <ContentImg url={l1} mv={-70} />
        <Caption text="The Lathe" />

        <SubHeadingText2 text="Types of Lathe Machine Operations" />
        <Content>
          The lathe machine operations are classified into three main categories
          and are as follows. Following are the Lathe machine operations done
          either by holding the workpiece between centers or by a chuck:
          {"\n"}
          1. Turning Operation
          {"\n"}
          a. Plain or Straight Turning
          {"\n"}
          b. Rough Turning
          {"\n"}
          c. Shoulder Turning
          {"\n"}
          d. Taper Turning
          {"\n"}
          e. Eccentric Turning
          {"\n"}
          2. Facing Operation
          {"\n"}
          3. Chamfering Operation
          {"\n"}
          4. Knurling Operation
          {"\n"}
          5. Thread cutting Operation
          {"\n"}
          6. Filing Operation
          {"\n"}
          7. Polishing Operation
          {"\n"}
          8. Grooving Operation
          {"\n"}
          9. Spinning Operation
          {"\n"}
          10. Spring Winding
          {"\n"}
          11. Forming
          {"\n"}
          {"\n"}
          Lathe machine operations which are performed by holding the work by a
          chuck or a faceplate or an angle plate are:
          {"\n"}
          1. Drilling
          {"\n"}
          2. Reaming
          {"\n"}
          3. Boring
          {"\n"}
          4. Counter boring
          {"\n"}
          5. Taper boring
          {"\n"}
          6. Tapping
          {"\n"}
          7. Undercutting
          {"\n"}
          8. Internal thread cutting
          {"\n"}
          9. Parting-off
          {"\n"}
          {"\n"}
          The operation which is performed by using special attachments are:
          {"\n"}
          1. Grinding
          {"\n"}
          2. Milling
          {"\n"}
          {"\n"}
          Conclusion: As we discussed lathe has a wide range of applications in
          manufacturing industries. Performing any operation on the lathe is
          much easier than other machines and learning about this machine is
          equally easier.
        </Content>
      </>
    ),
  },

  // Grinding
  {
    topic: "Grinding Operations",
    bgImg: go1,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Grinding is a metal cutting operation like any other process of
          machining removing metal in comparatively smaller volume. The cutting
          tool used is an abrasive wheel having many numbers of cutting edges.
          The machine on which grinding the operation is performed is called a
          grinding machine.
          {"\n"}
          {"\n"}
          Grinding is done to obtain very high dimensional accuracy and better
          appearance. The accuracy of grinding process is 0.000025mm. The amount
          of material removed from the work is very less.
        </SubHeadingText>
        <SubHeadingText2 text="Types of grinding machines " />

        <Content>
          According to the accuracy of the work to be done on a grinding
          machine, they are classified as
          {"\n"}
          1. Rough grinding machines
          {"\n"}
          a. Hand grinding machine
          {"\n"}
          b. Bench grinding machine
          {"\n"}
          c. Floor stands grinding machine
          {"\n"}
          d. Flexible shaft grinding machine
          {"\n"}
          e. Swing frame grinding machine
          {"\n"}
          f. Abrasive belt grinding machine
          {"\n"}
          {"\n"}
          2. Precision grinding machines
          {"\n"}
          a. Cylindrical grinding machines:
          {"\n"}
          (1. External cylindrical grinding machines
          {"\n"}
          2. Internal cylindrical grinding machines)
          {"\n"}
          b. Internal grinding machines
          {"\n"}
          c. Surface grinding machines:
          {"\n"}
          (1. Horizontal spindle and reciprocating table type
          {"\n"}
          2. Horizontal spindle and rotary table type
          {"\n"}
          3. Vertical spindle and reciprocating table type
          {"\n"}
          4. Vertical spindle and rotary table type)
          {"\n"}
          d. Tool and cutter grinding machines
          {"\n"}
          e. Special grinding machines
        </Content>
        <ContentImg url={go1} mv={-90} />
        <Caption text="Fig. 1 Cylindrical Grinding Machines" />
        <ContentImg url={go2} mv={10} />
        <Caption text="Fig. 2 Horizontal Spindle" />
        <ContentImg url={go3} mv={10} />
        <Caption text="Fig. 3 Vertical Spindle" />

        <SubHeadingText>Grinding machine operations</SubHeadingText>
        <Content>
          The process of grinding is the operation of removing excess material
          from metal parts by a grinding wheel made of hard abrasives. The
          following operations are generally performed in a grinding machine.
          {"\n"}
          1. Cylindrical grinding
          {"\n"}
          2. Taper grinding
          {"\n"}
          3. Gear grinding
          {"\n"}
          4. Thread grinding
        </Content>
        <SubHeadingText>Grinding Wheel</SubHeadingText>
        <Content>
          A grinding wheel is a multi-tooth cutter made up of many hard
          particles known as abrasives having sharp edges. The abrasive grains
          are mixed with a suitable bond, which acts as a matrix to manufacture
          grinding wheels.
          {"\n"}
          1. Solid grinding wheels
          {"\n"}
          2. Segmented grinding wheels
          {"\n"}
          3. Mounted grinding wheels
        </Content>
        <SubHeadingText>Abrasives</SubHeadingText>
        <Content>
          Abrasives are used for grinding and polishing operations. It should
          have uniform physical properties of hardness, toughness and resistance
          to fracture. Abrasive may be classified into two principal groups.
          {"\n"}
          1. Natural abrasives
          {"\n"}
          2. Artificial abrasives
        </Content>
        <SubHeadingText2 text="Natural Abrasive" />
        <Content>
          The natural abrasives are obtained from the Earth’s crust. They
          include sandstone, emery, corundum and diamond. Sandstone is used as
          abrasive to grind softer materials only.
          {"\n"}
          {"\n"}
          Emery is natural alumina. It contains aluminium oxide and iron oxide.
          Corundum is also a natural aluminium oxide. It contains greater
          percentage of aluminium oxide than emery. Both emery and corundum have
          a greater hardness and abrasive action than sandstone.
          {"\n"}
          {"\n"}
          Diamond is the hardest available natural abrasive. It is used in
          making grinding wheels to grind cemented carbide tools.
          {"\n"}
          {"\n"}
          Artificial abrasives: Artificial abrasives are of two types. 1.
          Silicon carbide abrasives 2. Aluminium oxide abrasives
        </Content>
      </>
    ),
  },

  // Drilling Operation
  {
    topic: "Drilling Operations",
    bgImg: dr2,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          The drilling machine is defined as a machine which is used to make a
          circular hole, a tool used to drill the holes of different size and
          other related operations using a drill bit. The drilling machine is
          one of the most important machines in a workshop. As regards its
          importance it is second only to the lathe machines. Holes were drilled
          by the Egyptians in 1200 B.C. about 3000 years ago by bow drills. The
          bow drill is the mother of present-day metal cutting drilling machine.
        </SubHeadingText>
        <ContentImg url={dr1} mv={20} />
        <Caption text="Fig. 1 Drilling Machine" />
        <Container>
          <Content>
            In drilling, machine holes may be drilled quickly and at a low cost.
            The hole is generated by the rotating edge of a cutting tool known
            as the drill which applies a large force on the work clamped on the
            table. As the machine uses vertical pressure to originate a hole it
            is loosely called a "drill press".
          </Content>
          <SubHeadingText2 text="Parts of Drilling Machine " />
          <Content>
            Following are the main parts of drilling machines:
            {"\n"}
            1. Base 2. Column 3. Table 4. Radial Arm 5. Drill head 6. Spindle
            speed and Feed mechanism.
          </Content>
          <SubHeadingText2 text="Types of Drilling Machine " />
          <Content>
            Following are the 8 different types of drilling machine.
            {"\n"}
            1. Portable drilling machine
          </Content>
          <ContentImg url={dr2} mv={-75} />
          <Caption text="Fig 1. Portable Drilling Machine" />
          <Content>
            2. Sensitive drilling machine
            {"\n"}
            a. Bench mounting sensitive drilling machine
            {"\n"}
            b. Floor column upright drilling machine
          </Content>
          <ContentImg url={dr3} mv={-30} />
          <Caption text="Fig 2. Sensitive Drilling Machine" />
          <Content>
            3. Upright drilling machine
            {"\n"}
            a. Round column upright drilling machine
            {"\n"}
            b. Box column upright drilling machine
          </Content>
          <ContentImg url={dr4} mv={20} />
          <Caption text="Fig 3. Upright Drilling Machine" />
          <Content>
            4. Radial drilling machine
            {"\n"}
            a. Plain drilling machine
            {"\n"}
            b. Universal drilling machine
            {"\n"}
            c.Semi-universal drilling machine
          </Content>
          <ContentImg url={dr5} mv={-25} />
          <Caption text="Fig 4. Radial Drilling Machine" />
          <Content>5. Gang drilling machine</Content>
          <ContentImg url={dr6} mv={-30} />
          <Caption text="Fig 5. Gang Drilling Machine" />
          <Content>6. Multiple spindle machine </Content>
          <ContentImg url={dr7} mv={-10} />
          <Caption text="Fig 6. Multiple spindle machine " />
          <Content>7. Automatic drilling machine </Content>
          <ContentImg url={dr8} mv={-10} />
          <Caption text="Fig 7. Automatic drilling machine " />
          <Content>
            8. Deep hole drilling machine
            {"\n"}
            a. Vertical deep hole drilling machine
            {"\n"}
            b. Horizontal deep hole drilling machine
          </Content>
          <ContentImg url={dr9} mv={-70} />
          <Caption text="Fig 9. Deep hole drilling machine" />
          <SubHeadingText2 text="Drilling Machine Tools" />
          <Content>
            are manufactured in a wide variety of types and sizes.
            {"\n"}
            The following are the different types of tools used in drilling
            machine:
            {"\n"}
            1. Flat or spade drill tool
          </Content>
          <ContentImg url={dr10} mv={-150} />
          <Content>2. Straight fluted drill tool</Content>
          <Content>
            3. Two-lip twist drill tool
            {"\n"}
            a. Parallel shank (short series or ‘’ jobbers’’ twist drill)
            {"\n"}
            b. A Parallel shank (stub series) twist drill
            {"\n"}
            c. Parallel shank (long series) twist drill
            {"\n"}
            d. A Parallel shank twist drill
          </Content>
          <ContentImg url={dr12} mv={-150} />
          <Content>4. Taper shank core drill (Three or four fluted)</Content>
          <ContentImg url={dr13} mv={-90} />
          <Content>5. Oil tube drill</Content>
          <ContentImg url={dr14} mv={-90} />
          <Content>6. Centre drill</Content>
          <ContentImg url={dr15} mv={-30} />
        </Container>

        <SubHeadingText2 text="Drilling Machine Operations" />
        <Container>
          <Content>
            Following are the different types of operations performed on the
            drilling machine:
            {"\n"}
            {"\n"}
            1. Drilling operation
            {"\n"}
            2. Reaming operation
            {"\n"}
            3. Boring operation
            {"\n"}
            4. Counter-boring operation
            {"\n"}
            5. Countersinking operation
            {"\n"}
            6. Spot facing operation
            {"\n"}
            7. Tapping operation
            {"\n"}
            8. Lapping operation
            {"\n"}
            9. Grinding operation
            {"\n"}
            10. Trepanning operation
          </Content>
        </Container>
      </>
    ),
  },
  // Milling Operation
  {
    topic: "Milling Operations",
    bgImg: mi1,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Milling is the machining process in which the removal of metal takes
          place due to the cutting action of a rotating milling cutter.
          {"\n"}
          {"\n"}
          In a milling machine, the cutter is rotating due to this work piece is
          fed against it. This can hold more than one tool at a time. The cutter
          rotates at a high speed and because of the many cutting edges, it
          removes metal at a very fast rate.
          {"\n"}
          {"\n"}
          The machine can also hold one or a number of cutters at a time. Thus,
          the milling machine is one of the most important machines in the
          workshop. In this machine, all the operations can perform with high
          accuracy.
          {"\n"}
          {"\n"}
          The metal removal rate is high as compared to a lathe machine, planner
          machine, and shaper machine. It has good accuracy and better surface
          finish. This is why a milling machine finds wide application in
          production work.
        </SubHeadingText>

        <SubHeadingText2 text="Parts of Milling Machine" />

        <Content>
          Following are the parts of milling machine:
          {"\n"}
          1. Base
          {"\n"}
          2. Column
          {"\n"}
          3. Saddle
          {"\n"}
          4. Table
          {"\n"}
          5. Overhanging arm
          {"\n"}
          6. Front brace
          {"\n"}
          7. Spindle
          {"\n"}
          8. Arbor
        </Content>
        <ContentImg url={mi1} mv={15}/>
        <Caption text="Fig 1." />
        <SubHeadingText2 text="Working Principle of Milling Machine" />
        <Content>
          The working principle of the milling machine, applied in the metal
          removing operation on a milling machine. The work is rigidly clamped
          on the table of the machine and revolving multi teeth cutter mounted
          either on a spindle.
          {"\n"}
          The cutter revolves at a normal speed and the work fed slowly past the
          cutter. The work can be fed in a longitudinal, vertical or cross
          direction. As the work progress further, the cutter teeth remove the
          metal from the work surface to produce the desired shape.
        </Content>
        <ContentImg url={mi2} mv={-30} />
        <Caption text="Fig 2." />
        <SubHeadingText2 text="Size of Milling Machine " />
        <Content>
          The size of the milling machine is determined by the dimensions of its
          maximum length of longitudinal, cross and vertical travel of the table
          and also by working surface of the machine.
        </Content>
        <ContentImg url={mi3} mv={-20} />
        <Caption text="Fig 3." />
        <Content>
          In addition to the above dimensions, number of spindle speeds, number
          of feeds, power available, spindle nose taper, net weight and the
          floor space required, etc. Should also be considered in order to
          specify the machine fully.
        </Content>
        <SubHeadingText2 text="Types of Milling Machines " />
        <Content>
          Following are the different types of milling machines:
          {"\n"}
          1. Column and knee type:
          {"\n"}
          a. Hand milling machine
          {"\n"}
          b. Plain or horizontal milling machine
          {"\n"}
          c. Vertical milling machine
          {"\n"}
          d. Universal milling machine
          {"\n"}
          e. Omniversal milling machine)
          {"\n"}
          {"\n"}
          2. Manufacturing type or fixed bed type:
          {"\n"}
          a. Simplex milling machine
          {"\n"}
          b. Duplex milling machine
          {"\n"}
          c. Triplex milling machine)
          {"\n"}
          {"\n"}
          3. Planer type milling machine 4. Special Type:
          {"\n"}
          a. Rotary table milling machine
          {"\n"}
          b. Drum milling machine
          {"\n"}
          c. Profile milling machine
          {"\n"}
          d. Planetary milling machine
          {"\n"}
          e. Tracer controlled milling machine
          {"\n"}
          f. Pantograph milling machine
          {"\n"}
          g. NC/CNC milling machine).
        </Content>
        <ContentImg url={dr4} mv={10}/>
        <SubHeadingText2 text="Types of Milling Cutters" />
        <Content>
          A milling machine is a machine tool that cuts metal as the workpiece
          is fed against a rotating multipoint cutter. The milling cutter
          rotates at a very high speed because of the multiple cutting edges, it
          cuts the metal at a very fast rate. This machine can also hold single
          or multiple cutters at the same time.
          {"\n"}
          {"\n"}
          Following are the different types of milling cutters:
          {"\n"}
          1. Solid milling cutter 2. Tipped solid milling cutter 3. Inserted
          teeth milling cutter 4. Profile relieved milling cutter 5. Form
          relieved milling cutter 6. Arbor type milling cutter 7. Facing type
          milling cutter 8. Shank type milling cutter 9. Right-hand rotational
          cutter 10. Left-hand rotational cutter 11. Parallel or straight teeth
          cutter 12. Right-hand helical cutter 13. Left-hand helical cutter 14.
          Alternate helical teeth cutter 15. Standard milling cutter 16. Special
          milling cutter
        </Content>

        <SubHeadingText2 text="Milling Cutters are classified" />
        <Content>
          1. According To The Constructional Feature of The Cutter
          {"\n"}
          Solid Cutter: A solid cutter has teeth with the cutter body. The
          cutters are of smaller diameter and made of one piece material usually
          of (HSS) high-speed steel.
          {"\n"}
          Tipped Solid Cutter: A tipped solid cutter is similar to a solid
          cutter, except that the cutter teeth are made of cemented carbide or
          stellite tips which are brazed on the tool shanks of an ordinary tool
          steel cutter body to lower the cost of the cutter.
          {"\n"}
          Inserted Teeth Cutter: In large milling cutters, the teeth or blades
          are inserted or secured in a body of less expensive materials. The
          blades are held in the cutter body by mechanical means. This
          arrangement reduces the cost of the cutter and enables economy in
          maintenance, as a single tooth if broken can be readily replaced.
          {"\n"}
          {"\n"}
          2. According To The Relief Characteristics of The Cutter Teeth Profile
          Relieved Cutter: In this category of milling cutters, a relief to the
          cutting edges is provided by grinding a narrow land at the back of the
          cutting edges. The profile relieved cutters generate flat, curved or
          irregular surfaces. Form Relieved Cutter: Form relived cutter also
          known as surface milling. These cutters have curved relief provided at
          the backside of the cutting edges. These cutters are sharpened by
          grinding the faces of the teeth. The form relieved cutters are used
          for generating formed or contoured surfaces.
          {"\n"}
          {"\n"}
          3. According To The Methods of Mounting The Cutter Arbor Type Cutter
          The arbor type cutters are provided with a central hole having a
          keyway for mounting them directly on the milling machine arbor.
          Milling cutters having tapered or threaded holes are also available.
          They are mounted on arbors of different designs. Shank Type Cutter:
          The shank type cutters are provided with straight or tapered shank
          integral with cutter body. The straight or tapered shanks are inserted
          into the spindle nose and are fixed to it by a draw bolt. Facing Type
          Cutter: The facing type cutters are either bolted or attached directly
          to the spindle nose, or secured on the face of a short arbor called
          stub arbor. The facing type cutters are mainly used to produce flat
          surfaces.
          {"\n"}
          {"\n"}
          4. According To The direction of Rotation of The Cutter Teeth Right
          Hand Cutter A milling cutter is designated as a right-hand cutter
          which rotates in an anticlockwise direction when viewed from the end
          of the spindle. Left Hand Cutter: A milling cutter is designated as a
          left-hand cutter which rotates in a clockwise direction when viewed
          from the end of the spindle.
          {"\n"}
          {"\n"}
          5. According To The Direction of The Helix of The Cutter Teeth
          Parallel or Straight Teeth Cutter The parallel or straight teeth
          cutters have their straight or parallel to the axis of rotation of the
          cutter. The helix angle of parallel teeth cutters is equal to zero.
          Right Hand Helical Teeth Cutter These cutters have their teeth cut at
          an angle to the axis of rotation of the cutter. The cutters may be
          distinguished by viewing it from one of its end faces when the helical
          groove or flute will be found to lead from left to right-hand
          direction of the cutter body.
          {"\n"}
          Left Hand Helical Teeth Cutter These cutters have their teeth cut at
          an angle to the axis of rotation of the cutter. The cutter may be
          distinguished by viewing it from one of its end faces when the helical
          groove or flute will be found to lead from right to left-hand
          direction of the cutter body. Alternate Helical Teeth Cutter In some
          cutters, the alternate teeth are provided with right and left and
          helical angles.
          {"\n"}
          {"\n"}
          6. According To The Purpose or Use of The Cutter Standard Helical:
          Teeth Cutter These cutters are a conventional type of milling cutters
          whose dimensions such as cutter diameter and width, the diameter of
          the centre hole, width and depth of keyways, etc. are standardized.
          {"\n"}
          Special Milling Cutter Special milling cutters are designed to perform
          special operations which may be the combination of several standard
          operations. The cutters may have standard or non-standard dimensions.
        </Content>
        <SubHeadingText2 text="Types of Standard Milling Cutter" />
        <Content>
          Following are the different types of standard milling cutters:
          {"\n"}
          1. Plain milling cutter:
          {"\n"}
          a. Light duty plain milling cutter.
          {"\n"}
          b. Heavy-duty plain milling cutter. c. Helical plain milling cutter.
          {"\n"}
          2. Side milling cutter: a. Plain side milling cutter. b. Staggered
          teeth side milling cutter. c. Half side milling cutter. d.
          Interlocking side milling cutter
          {"\n"}
          3. Metal slitting saw: (a. plain metal slitting saw b. staggered teeth
          metal slitting saw)
          {"\n"}
          4. Angle milling cutter: (a. Single angle milling cutter b. Double
          angle milling cutter)
          {"\n"}
          5. End mill: (a. Taper shank end mill b. A straight shank end mill c.
          Shell end mill) 6. T-slot milling cutter
          {"\n"}
          7. Woodruff key slot milling cutter
          {"\n"}
          8. Fly cutter
          {"\n"}
          9. Formed cutter: (a. convex cutter b. Concave milling cutter c.
          Corner rounding milling cutter d. Gear cutter e. Thread milling
          cutter)
          {"\n"}
          10. Tap and reamer cutter
        </Content>
        <SubHeadingText2 text="Milling Machine Operations" />
        <Content>
          Following are the different types of operations performed on milling
          machine:
          {"\n"}
          1. Plain Milling Operation
          {"\n"}
          2. Face Milling Operation
          {"\n"}
          3. Side Milling Operation
          {"\n"}
          4. Straddle Milling Operation
          {"\n"}
          5. Angular Milling Operation
          {"\n"}
          6. Gang Milling Operation
          {"\n"}
          7. Form Milling Operation
          {"\n"}
          8. Profile Milling Operation
          {"\n"}
          9. End Milling Operation
          {"\n"}
          10. Saw Milling Operation
          {"\n"}
          11. Milling Keyways, Grooves, and Slot
          {"\n"}
          12. Gear Milling
          {"\n"}
          13. Helical Milling
          {"\n"}
          14. Cam Milling
          {"\n"}
          15. Thread Milling
        </Content>

        <SubHeadingText2 text="Fundamentals of Milling Machine" />
        <Content>
          The milling process performed may be grouped under two separate
          headings
          {"/n"}
          1. Peripheral milling
          {"/n"}
          2. Face milling
          {"/n"}
          3. End milling
        </Content>

        <SubHeadingText2 text="Peripheral Milling: " />
        <Container>
          <Content>
            It is the operation performed by a milling cutter to produce a
            flat-machined surface perpendicular to the axis of rotation of the
            cutter.
            {"\n"}
            {"\n"}
            The peripheral cutting edges of the cutter do the actual cutting,
            whereas the face cutting edges finish up the work surface by
            removing a very small amount of the metal.
          </Content>
        </Container>
        <SubHeadingText2 text="Face Milling: " />
        <Container>
          <Content>
            It is the operation performed by a milling cutter to produce a
            flat-machined surface perpendicular to the axis of rotation of the
            cutter.
            {"\n"}
            {"\n"}
            The peripheral cutting edges of the cutter do the actual cutting,
            whereas the face cutting edges finish up the work surface by
            removing a very small amount of the metal.
          </Content>
        </Container>
        <SubHeadingText2 text="End Milling: " />
        <Content>
          End milling is the combination of peripheral and face milling.
        </Content>
        <SubHeadingText2 text="Conclusion" />
        <Content>
          The milling machine is a widely used machine in many industries
          because of the high metal removal rate, good accuracy, and better
          surface finish. This is why a milling machine finds a wide application
          in production work
        </Content>
      </>
    ),
  },
];
