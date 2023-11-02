import React from "react";
import {
  student
} from "../assets/images";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  ImageProps,
} from "react-native";
import { FONTS, SIZES } from "./theme";

const HeadingText = ({ text }: { text: string }) => (
  <Text
    style={{
      fontFamily: FONTS.Bold,
      fontSize: SIZES.large,
      color: "#222",
    }}
  >
    {text}
  </Text>
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
const SubHeadingText2 = ({ text }: { text: string }) => (
  <Text
    style={{
      fontFamily: FONTS.Medium,
      fontSize: SIZES.normal,
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
      fontSize: SIZES.normal + 2,
      color: "#333",
      textAlign: "justify",
    }}
  >
    {children}
  </Text>
);
const Content = ({ children }: { children: React.ReactNode }) => (
  <Text
    style={{
      fontFamily: FONTS.Light,
      fontSize: SIZES.normal,
      color: "#333",
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
  // Machine Tools
  {
    topic: "Machine Tools",
    bgImg: student,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          A metal workshop machine which performs the material removal operation
          with tool, to produce desired shape and size of the workpiece is known
          as a machine tool. The purpose of machine tools is to save time, cost
          of production and to get better output which cannot be obtained with
          hand tools with manual operation.
          {`\n`}
        </SubHeadingText>
        <SubHeadingText2 text="Types of Machines" />
        <Content>
          The various types of machine tools commonly used in workshops are
          lathe, shapers, planners, drilling machine, grinding machines and
          milling machines.
          {"\n"}
          {"\n"}
          Lathe: the lathe is known and refers to as the father of all
          production machines, it is the most important machines in any
          workshop; it is a machine tool that is uses cutting tool for removing
          the material from the surface of the workpiece. Its main objective is
          to remove material from outside by rotating the work against a
          “cutting tool”. It is used to produce cylindrical work, yet it may
          also be used for many other purposes such as drilling, threading,
          grinding, milling etc. in lathe, workpiece is held in a chuck or
          between centers and rotate about its axis at a uniform speed. The
          cutting tool held in the tool post is fed into the workpiece for a
          desired depth and in the desired direction.
          {"\n"}
          {"\n"}
          Types of lathe Though the fundamental principle of operation of all
          lathes is same and perform the same function, yet they are classified
          according to the design type of drive arrangement of gear and purpose.
          The following are the various types of lathes found in the
          metal/mechanical workshops; {"\n"}
          1. Speed lathe: this type of lathe is driven by high speeds usually
          from 1200 to 3600 r.p.m. it is usually used for metal spinning,
          polishing, wood working etc. {"\n"}
          2. Engine or Centre Lathe: it is a general purpose lathe and is widely
          used in workshop. It differ from a speed lathe, that it has additional
          mechanism for controlling the spindle speed. {"\n"}
          3. Special Purpose Lathe: The works which cannot be conveniently
          accommodated on a standard lathe the special purpose lathe are used.
          {"\n"}
          4. Automatic lathe: these are so designed that the tool are
          automatically fed into the work and withdrawn after all the operations
          are complete to finish the work. Since the entire operations are
          {"\n"}
          automatic, this lathe requires little attention of the operator.{"\n"}
          5. Bench Lathe: this lathe is so small that it can be mounted on the
          bench. All the types of operations can be performed on the lathe that
          may be done in an ordinary speed or Centre lathe. It is used for small
          work.
        </Content>
        <SubHeadingText2 text="Principle Parts of a lathe are:" />
        <Content>
          Like all other machines found in the workshop possesses different
          parts so do lathe, the following are some of the principle parts of
          the lathe {"\n"}
          1. Bed: this part of the lathe holds or supports all other parts of
          the lathe. {"\n"}
          2. Headstock: all lathe receive their power through the head stock.{" "}
          {"\n"}
          3. Tailstock: this is the counterpart of the headstock and is situated
          at the right hand end of the bed. It is used for supporting the work
          when turning on the center.{"\n"}
          4. Carriage: this control and supports the cutting tool. It moves on
          the ways of the bed.{"\n"}
          5. Feed Mechanism: the feed mechanism of a lathe is employed for
          imparting various feed to the cutting tool.{"\n"}6. Tool Post: This is
          mounted on the compound rest. It is used to hold various cutting tool
          holders, the holder rest on a wedge which is shaped on the bottom to
          fit into a concave shaped ring.{"\n"}
          7. Lead Screw: it is used for converting rotational movement into
          linear movement.{"\n"}
          8. Guide ways: they guide the moving parts in a machine tool. They act
          as a mediator for transmitting forces to the bed of a machine tool.
          {"\n"}
          9. Spindle: it is hollow shaft used for transmitting power from the
          transmission system to the workpiece. {"\n"}
          10. Feed Gear Box: feed gear box is used for transmitting power from
          spindle to the lead screw at different speeds
        </Content>
        <SubHeadingText2 text="Terms used in Lathe Machining " />
        <Content>
          The following terms are commonly used while machining a workpiece on
          the lathe {"\n"}
          Cutting Speed: it is defined as the speed at which the material is
          removed by the cutting tool from the workpiece.{"\n"}
          Feed: is defined as the distance which the tool advances for each
          revolution of the workpiece. {"\n"}
          Depth of Cut: it is the depth of penetration of the tool into the
          workpiece during machining.
        </Content>
        <SubHeadingText2 text="Lathe Accessories" />
        <Content>
          The lathe accessories are used for holding and supporting the
          workpiece or for holding the cutting tool. The various lathe
          accessories found are:{`\n`}
          1. Centres: there are two types of centers i.e live center and dead
          center. A centre which fits into the headstock spindle and revolves
          with the workpiece is called live center while the centre which is
          used in a tailstock spindle and does not revolve is called dead
          centre.{`\n`}
          2. Chuck: it is an important device used for holding and rotating the
          workpiece in a lathe. The workpieces which are too short to be held
          between centres are clamped in a chuck. There are many types of chuck,
          but the following two are commonly used; a. Three Jaw universal cuck:
          this is also called self-centering chuck. This chuck is used for
          holding round and hexagonal workpiece. b. Four Jaw Indecent Chuck:
          this type of chuck is used for holding square, round and irregular
          shapes of work. {`\n`}
          3. Mandrel: this accessary is used to hold hollow workpiece to
          machining their external surfaces. This lathe mandrel is a cylindrical
          bar with centre hold at each end.{`\n`}
          4. Face plate: the face plate is used for holding work pieces which
          cannot be conveniently held in a chuck.{`\n`}
          5. Angle plate: this is always used with the face plate for holding
          such parts which cannot be clamped against the vertical surface of a
          face plate.
        </Content>
        <SubHeadingText2 text="LATHE TOOLS" />
        <Content>
          The tool used in a lathe, for general purpose work is a single point
          tool but for special operations multi-point tools may be used. The
          lathe tools depending upon the nature of operation done by the tool
          are classified as {"\n"}
          1. Turning tool {"\n"}
          2. Facing tool.{"\n"}
          3. Chamfering tool.{"\n"}
          4. Form or profile tool.{"\n"}
          5. Parting tool.{"\n"}
          6. External threading tool.{"\n"}
          7. Internal threading tool.{"\n"}
          8. Boring tool.{"\n"}
          9. Knurling tool
        </Content>
        <SubHeadingText2 text="LATHE OPERATIONS " />
        <Content>
          The most common operations which can be carried out on a lathe are
          facing, plain turning, step turning, temper turning, drilling,
          reaming, boring, undercutting, threading, and knurling.{"\n"}
          {"\n"}
          Facing: in this operation the workpiece is held in the chuck and the
          facing tool fed from the centre of the workpiece towards the outer
          surface or from the outer surface to the centre, with the help of a
          cross-slide.
          {"\n"}
          {"\n"}
          Plain turning: it is an operation of removing excess amount of
          material from the surface of a cylindrical workpiece.{"\n"}
          {"\n"}
          Step Turning: it is an operation of producing various steps of
          different diameters on the workpiece. The operation is carried out in
          the similar way as plain turning.
          {"\n"}
        </Content>
        <ContentImg url={student} />
        <Caption text="Facing                                Plain Turning                        Step Turning" />

        <Content>
          {"\n"}
          Taper Turning: this is an operation of producing an external conical
          surface on a workpiece.
          {"\n"}
          {"\n"}
          Drilling: it is an operation of producing a cylindrical hole in a
          workpiece with the help of a drill. The workpiece is held in a chuck
          and the drill is held in the tailstock.
          {"\n"}
          {"\n"}
          Reaming: A reaming is an operation of finishing the previously drilled
          hole. In a reaming process a reamer is held in the tailstock and it is
          fed into the hole in the similar way as for drilling.
          {"\n"}
          {"\n"}
          Boring: it is operation of enlarging a hole already made in a
          workpiece. In this operation a boring tool or a bit mounted on a rigid
          bar is held in the tool post and fed into the workpiece by hand or
          powered in the similar way as for turning.
        </Content>
        <ContentImg url={student} />
        <Caption text="       Drilling                                                     Reaming" />
        <ContentImg url={student} />
        <Caption text="   Boring                                                              Undercutting" />
        <Content>
          {"\n"}
          {"\n"}
          Undercutting or Grooving: it is an operation of reducing the diameter
          of a workpiece over a very narrow surface. In this operation a tool of
          appropriate shape is fed into the revolving workpiece up to the
          desired depth at right angles to the centre line of the workpiece.
          {"\n"}
          {"\n"}
          Threading: it is an operation of cutting helical grooves on the
          external cylindrical surface of workpiece. In this operation, the work
          is held in a chuck or between centres and the threading tool is fed
          longitudinally to the revolving workpiece. {"\n"}
          {"\n"}
          Knurling: the operation of producing knurled surface on the workpiece
          is called knurling. Here a knurling tool is moved longitudinally to a
          revolving workpiece surface. The projections on the knurled tool
          reproduced depressions on the work surface.
        </Content>
        <ContentImg url={student} />
        <Caption text="   Threading Tool                                                              Knurling Tool" />

        <ContentImg url={student} mv={-90} />
        <Caption text="Carriage" />

        <ContentImg url={student} mv={-1} />
        <Caption text="Lathe Machine" />
      </>
    ),
  },

  // Fuel System
  {
    topic: "Fuel System",
    bgImg: student,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          The internal combustion engine produces power by burning fuel and
          converting the chemical energy of the fuel into thermal (heat) energy.
          S.I. engines use gasoline (Petrol/Fuel) and generally carburetor fuel
          system which applies a combustible mixture of air and petrol at
          different proportions depending upon engine operating condition.
          {"\n"}
          {"\n"}
          The purpose of the fuel system in S.I. engines is to store adequate
          quantity of fuel and to pump it to the carburetor; the fuel system
          also prepares the air fuel mixture for combustion in the cylinder and
          carries the exhaust gas to the rear of the vehicle. It maintains a
          rate of flow and pressure sufficient to meet all the demand of speed
          and load placed on the carburetor.
        </SubHeadingText>
        <SubHeadingText2 text="COMPONENT OF THE FUEL SYSTEM " />
        <Content>
          The main components of the fuel system are 1. Fuel Tank: the tank is
          made of two halves of corrosion resistant steel which are ribbed for
          additional strength and welded together. Exposed section of the tank
          generally made of heavier steel for protection from road damage and
          corrosion. The tank design and capacity depend on the available space,
          filter location, fuel expansion room and fuel movement. A filter tube
          is placed in the tank to avoid complete filling to the tank. The air
          space created at the top of the tank allows space for fuel expansion.
          {"\n"}
          2. Fuel Lines: the components of the fuel system are connected by fuel
          and vapour liens and hoses. These allow supplying fuel to carburetor
          to return excess fuel to the tank and to carry fuel vapour. Fuel lines
          must be routed so as to remain as cool as possible, fuel supply line
          from the tank to the carburetor are mounted to follow the frame along
          the under-body of the car. {"\n"}
          3. Carburetor: automobile spark ignition engine uses combustible
          mixture of gasoline and air, carburetion is the mixing of gasoline
          fuel with air to get a combustible mixture. A carburetor mixes the
          correct amount of fuel into the incoming air to give the engine a
          combustible charge. The air-fuel ratio required by an engine depends
          upon temperature, load and speed of the engine.
        </Content>
        <SubHeadingText2 text="Carburetor must meet the following main requirements " />
        <Content>
          1. Easy start of engine at any temperature. {"\n"}
          2. Smooth operation of engine at variable loads and speeds. 3. Maximum
          power at full load. {"\n"}
          4. Best fuel economy 5. Good accelerating capabilities
        </Content>
        <SubHeadingText2 text="FUEL PUMP " />
        <Content>
          Carbureted Engines frequently have low-pressure mechanical pumps
          located outside the fuel tank. Fuel pumps transfers petrol from the
          tank to carburetor tough a fire grain filter. The pump must deliver
          petrol in sufficient volume and pressure to keep the carburetor bowel
          full of clean petrol. The fuel pressure must be kept below certain
          limits in order for the engine to work properly if the fuel pressure
          is too high, the engine will run rough and rich because it won’t use
          all of the gasoline pumped, making it inefficient and polluting. The
          engine might misfire, lean or store if the pressure is too low.
        </Content>
        <SubHeadingText2 text="TYPES OF FUEL PUMP" />
        <Content>
          There are two main types of fuel pumps including mechanical fuel pumps
          and electrical fuel pumps.{"\n"}
          Mechanical Fuel Pumps: prior to the widespread use of electric fuel
          injection, most gasoline engines relied on mechanical fuel pumps to
          transport fuel from the fuel tank to the carburetor bowl. The
          eccentricity of the engines camshaft drives the mechanical fuel pumps.
          It is located on the in-line cylinder block engines side. The most
          popular mechanical gasoline pumps are plunger-type and diaphragm
          pumps. A well-known positive displacement pump is the diaphragm pump.
          Similar to a positive pump, this pump has a pump chamber whose volume
          raises or lowers depending on the deflection of the flexible membrane.
        </Content>
        <ContentImg url={student} mv={-80} />
        <Caption text="Mechanical Fuel Pump" />
        <Content>
          Electrical fuel pumps are often used in modern cars fuel tanks. This
          pump pumps gasoline/petrol into the engine by creating high pressure
          in the fuel line
        </Content>
        <ContentImg url={student} mv={-80} />
        <Content>
          The boiling point of a gasoline increases as pressure rises. The
          components that take up the gasoline vapors from the engine (the pump
          itself) and submerge it in cold liquid are minimized by placing the
          pump within the fuel chamber. Another benefit of putting the electric
          fuel transfer pumps within the fuel chamber is that it reduces the
          risk of fire, spanks are generated and fuel vapor are ignited by
          electric equipment (such as fuel pump) but liquid fuel doesn’t
          explode. As a result, one of the most critical locations is to
          submerge the pump in a fuel chamber. By replacing the mechanical fuel
          pump with an electrical fuel pump, you may lessen the stress on the
          engines components while also lowering the engines fuel consumption.{" "}
        </Content>

        <Content>
          {"\n"}
          What kills a Fuel Pump? {"\n"}
          Rust, dirt or debris in the gas tank may swiftly destroy a gasoline
          pump. Rust develops on older steel tanks, whereas plastic tank begin
          to degrade after 8-10years.
          {"\n"}
          {"\n"}
          How many years does a fuel pump last?
          {"\n"}
          Fuel pumps are not serviced on a regular basis and must be replaced
          only when they fail, the majority of fuel pumps should last for at
          least 100,000 kilometers.
          {"\n"}
          {"\n"}
          What happens if the fuel pump is bad?
          {"\n"}
          Our vehicles performance and drivability will be severely hampered by
          a defective fuel pump. If your fuel-to-air ratio is wrong and the
          cylinders aren’t getting enough fuel, the pistons won’t fire and our
          engine will struggle to propel the car ahead, you automobile will
          simply not start if your fuel pump is damaged sufficiently.
          {"\n"}
          {"\n"}
          Can one clean a fuel pump?
          {"\n"}
          If your car has an electric fuel pump, you may clear any sediment
          build-up or obstruction with a fuel system cleaning. You can actually
          open the pump to remove debris out of its internal filter if you have
          a manual one but it is not an option in most new vehicles.
        </Content>
        <SubHeadingText2 text="Fuel Filter" />
        <Content>
          Despite all the care taken in refining, during storing and delivering
          of gasoline some impurities get into the automobile fuel system. Fuel
          filters remove dirts, rust, water and other harmful materials from the
          gasoline before it reaches the carburetor. During use the filters
          become dogged and hence restrict fuel-flow if they are not cleansed or
          replaced according to the manufacturers recommendations. Several
          different types of fuel filters are in use and some systems contain
          two or even more filters. Filters are being located in several places
          within the fuel system.
          {"\n"}
          {"\n"}
          {"\n"}
          The following are some types of fuel filter. {"\n"}
          1. Fuel Tank Filters and Strainers: this is fitted to the end of the
          fuel pick-up tube inside the fuel tank. It prevents sediment, settled
          at the bottom of the tank from entering the fuel line, it also prevent
          against water contamination by plugging itself up. {"\n"}
          2. In-Line Filter: it is installed in the line between the fuel pump
          and carburetor. This protects the carburetor from contamination but
          does not protect the fuel pump. {"\n"}
          3. Carburetor Inlet Filter: some automobile manufacturers install a
          filter at the carburetor inlet. The filter is screwed into the
          carburetor fuel in-let and is clamped to the inlet at the other end.
          {"\n"}
          4. Pump Outlet Filters: some cars incorporate fuel filters at the
          outlet side of the fuel pump. Pic a shows the filter is installed in
          the fuel pump outlet tower whereas in pie B it is located at the
          bottom of the pump. {"\n"}
          5. Air Cleaner-cum-filter: air contains dirt, abrasives and other
          contaminates which cannot be allowed to reach the engine air cleaner
          are used to remove contaminates from the air. It has three primary
          functions{"\n"}
          a. To clean air before mixing with fuel. {"\n"}
          b. To silence intake noise. {"\n"}
          c. To act as a flame arrester in the case of backfire.
          {"\n"}
          6, Emission Vapor Controls: these controls use in combination with
          fuel return lines. This part of the overall system is used to prevent
          petrol vapors from being discharged into the ambient air. When this
          happen, following some bad things can happen; {"\n"}
          a. A bad odor of gasoline enters the car. {"\n"}
          {"\n"}
          2. The earth-shattering roar of gasoline fumes ignites. {"\n"}
          3. It is bad for the environment 7, Fuel Pressure Regulators; this
          unit of the fuel delivery system makes sure that the system properly
          maintains a proper amount of pressure. The fuel pressure regulator
          unit I most commonly used in fuel injector
        </Content>
        <ContentImg url={student} mv={-1} />
        <Caption text="S.I. Engine Fuel system" />
      </>
    ),
  },

  // Start of Properties of Metal
  {
    topic: "Properties of Metal",
    bgImg: student,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Iron is the most important of all metals. It is the primary metal used
          to make a variety of steels which are the most popular engineering
          materials of our times the allotropic property of iron is responsible
          for obtaining different micro structures on the various forms of
          steels. Iron is also an excellent solvent for money metals. Each
          particular metal is developed or selected because of it
          characteristics or properties in relation to its use. The typical
          properties which are considered in the selection and production of
          metal products include: weight harness, toughness, brittleness,
          corrosion resistances, response to heat treatment and machinability. A
          basic idea of various metals and their properties is importance for
          workers engaged in the design, fabrication, and maintenance of metal
          products. Metals can be hardened, softened, bent, twisted, pulled
          apart or fractured, depending on the properties which they are made up
          of or which they possess.
        </SubHeadingText>
        <SubHeadingText2 text="The properties of metals maybe classified in three main groups namely; " />

        <Content>
          1. Physical properties: This property includes those characteristics
          used to describe a substance which is not being acted by external
          forces. It includes items like weight heat conductivity, colour,
          fusibility etc. {"\n"}
          2. Chemical properties: these properties include characteristics
          concerned with the chemical composition and chemical reactions of
          materials – resistance to corrosion and the effects of alloying.{"\n"}
          3. Mechanical properties: these are those characteristics which
          describe the behavior of metal which is being acted upon by external
          forces, e.g tensile strength hardness, ductility and machinability
          etc. some of the more significant mechanical properties which should
          be understood by all engineers, technicians or student in the
          engineering field are described below;{"\n"}
          a. Hardness: hardness implies the ability of metal to resistance to
          scratching, marking, cutting, penetrate and wear metal-cutting tools
          are made of metal which rank high in hardness. This property may be
          increased or decreased in many metals by various methods heat
          treatment. Tools are mechanized to shape while soft. They are then
          hardened by heat treatment to provide strength and durability.
          Examples of metals that possess this property are as follows; ball and
          roller bearing, cam, gears, cutting tools etc. {"\n"}
          b. Hardenability: hardenability is the property which enables a metal
          to harden completely through to its center when a heat-treatment
          method is used. Some metals are ranked low in hardenability. This
          means that they harden significantly on the surface layer only while
          they remain relatively soft at the core or center. {"\n"}
          c. Brittleness: brittleness is the undesirable property of breaking
          without deformation or warning. Gray cast iron is brittle in
          comparison with unhardened steel, under a heavy blow the cast iron
          will break apart while steel usually will bend instead of breaking.
          Brittleness is related to hardness in metals; as the hardness of a
          metal is increased, its brittleness also is increased. {"\n"}
          d. Ductility: ductility is the quality of being drawn into fine-wire,
          twisted or changed in shape without breaking. Metal which are ranked
          high in ductility are copper, aluminum, and soft steel. Ductile metals
          fail or break gradually with increased stress or load. {"\n"}
          e. Malleability: malleability is the property of being bent, hammered
          or rolled without fracture. Most ductile metals are malleable.
          However, fracture. Most ductile metals are malleable. However, there
          are some exceptions, such as load, lead lacks sufficient tensional
          strength to be stretched very far. Therefore it is not ductile. {"\n"}
          f. Toughness: toughness is the ability of a metal to withstand
          bending, twisting or shock – without breaking. Toughness should not be
          confused with hardness, since it is possible to have a combination of
          hardness and negligible toughness e.g. a file is both hard and tattle.{" "}
          {"\n"}
          g. Machinability: machinability is a property of metal which indicate
          the ease with or to which metals may be worked. Many factors are
          considered in arriving ones are rated of metal removal, quality of the
          finished surface and tool life. {"\n"}
          h. Fatigue: fatigue could be referred to as the puzzling property
          which has become so important recently in the study of fast-moving
          aircraft and rockets that of causing metal to deteriorate in strength
          under repeated applications of loads which is considerably below the
          tensile strength of the metal. By repeated bending, a piece of metal
          may be broken due to fatigue. Springs, propeller shafts, gear teeth or
          other machine parts subjected to repeated vibration sometimes fail due
          to fatigue. {"\n"}
          i. Conductivity: conductivity is the property that makes metals to
          conduct heat and electricity well. Silver, copper and aluminum, in
          that order is the best conductor of heat and electricity. {"\n"}
          j. Strength: strength of a metal is its resistance to deformation. The
          common types of strength as a property of metal are tensile strength,
          compressive strength, shear strength and torso or twisting strength.
          Tensile strength is that property of a material which resists
          tensional forces applied metal usually is expressed in terms of
          millions of Pascal’s (MPs) (Thousands of pounds per square inch (PSI).
          {"\n"}
          k. Fusibility: fusibility is that property of metal which enable them
          to be joined readily with another metal when heated to a liquid state.
          Fusibility is one of the important properties in welding. Metals which
          are ranked high in fusibility generally can be welded with ease.{" "}
          {"\n"}
          l. Elasticity: this is the property of a metal to regain its original
          shape after deformation when the external forces are removed. This
          property is desirable for materials used in tools and machine. It may
          be noted that steel is more elastic than rubber. {"\n"}
          m. Resilience: it is the property of a metal to absorb energy and to
          resist shock and impact loads. Thus property I essential for spring
          materials. {"\n"}
          n. Creep: when a part is subjected to a constant stress at high
          temperature for a long period of time, it will undergo a slow and
          performed deterioration called creep. This property is considered in
          metals used in designing internal combustion engines, boilers and
          turbines. {"\n"}
          o. Fatigue: fatigue is the property that causes metal to fracture in a
          repeated load which is considerably below the tensile strength of the
          material by repeated bending, a piece of metal maybe broken due to
          fatigue, e.g. repelled shafts, gear-teeth and other parts of machines
          subjected to reaped vibration. {"\n"}
          p. Plasticity: plasticity is the property of a metallic material which
          permits permanent deterioration to occur without rupture.
        </Content>
      </>
    ),
  },

  //Building drawing start
  {
    topic: "Foundry Tools",
    bgImg: student,
    content: () => (
      <>
        <HeadingText text="Introduction" />
        <SubHeadingText>
          Foundry is a place where castings are produced. Casting in the
          industry or workshops is a process of pouring molten metal into a mold
          and allowing it to solidify to take a desired shape The foundry tools
          and equipment are divided into the following five groups 1. Hand tools{" "}
          {"\n"}
          2. Molding boxes (flashes) {"\n"}
          3. Molding machines {"\n"}
          4. Melting equipment, and {"\n"}
          5. Pouring equipment
          {"\n"}
        </SubHeadingText>
        <SubHeadingText2 text="Foundry hand tools commonly employed in foundry process are " />
        <ContentImg url={student} mv={-60} />
        <Container>
          <Content>
            3. Rammer: a hand rammer is made of wood or metal. It has a wedge
            shape construction at one end (called peen) and a cylindrical shape
            at the other and (called butt). It is used for packing and ramming
            the sand for bench molding
          </Content>
          <ContentImg url={student} />
          <Content>
            4. Mallet: it is used to lessen the pattern in the mold so that it
            can be withdrawn easily.
          </Content>
          <ContentImg url={student} mv={-90} />
          <Content>
            5. Strike-off-bar: it is a straight bar of wood or steel usually of
            rectangular cross-section. It is used to trickle or strike off
            excess molten metal to provide a level and smooth surface.
          </Content>
          <ContentImg url={student} mv={-100} />
          <Content>
            6. Vent wire: this is similar to a knitting needle. It has a pointed
            edge at one end, a handle at the other end. It is used to pierce
            holes in the rammed sound/metal to provide artificial vents which
            permit the easy escape of steam and gases generated by the hot metal
            in contact with the object.
          </Content>
          <ContentImg url={student} mv={-100} />
          <Content>
            7. Slick: a slick is a small double ended tool having a flat surface
            in one end and a spoon on the other. It is used for repairing and
            finishing the mold surface after the pattern is withdrawn
          </Content>
          <ContentImg url={student} mv={-70} />
          <Content>
            8. Lifter: it is used for smoothing and cleaning out depression in
            the mold
          </Content>
          <ContentImg url={student} mv={-70} />
          <Content>
            9. Swab: it is a small brush having long ramp fibres. It is used for
            moisturing the casted metal before the pattern is removed.
          </Content>
          <ContentImg url={student} />
          <Content>
            10. Gate Cutter: this is U-shaped piece of thin sheet. It is used
            for cutting a shallow through in the mold to act as a passage for
            the hot metal.
          </Content>
          <ContentImg url={student} mv={-70} />
          <Content>
            11. Spur cutter: this is also known as rammer peg. It is a tapered
            wooden peg. It is forced into the top part of the mold (known as
            cope) at the correct position. When the peg is withdrawn, it leaves
            a cavity (called gate) through which a molten metal is poured.
          </Content>
          <ContentImg url={student} mv={-90} />
        </Container>

        <SubHeadingText2 text="MOLDING BOXES (FLASKS)" />
        <Container>
          <Content>
            The metal mold is prepared in a specially constructed box called
            flasks, which are open in the top and bottom. The flasks can be made
            of either wood or metals. The metal flasks of steel, cast iron,
            magnesium or aluminum alleys are widely used in production work
            because of their rigidity. Two types of flasks are widely used in
            foundry, namely; {"\n"} {"\n"}
            Box Type Flask – This is used for small and medium-sized castings.
            Snap flask – often used in the production of small casting and in
            machine molding.
          </Content>
          <ContentImg url={student} mv={-90} />
        </Container>
        <SubHeadingText2 text="Molding Machines" />
        <Container>
          <Content>
            The molding machines performs the following operations {"\n"}
            1. Ramming of casted metal or sand in the mold {"\n"}
            2. Lifting or drawing of pattern from the mold and {"\n"}
            3. Rolling over the mold section {"\n"}
            {"\n"}
            The two main classes of molding machines are; 9. Hand Molding
            Machine, and {"\n"}
            10. power Molding Machine {"\n"}
            {"\n"}
            The hand molding machine is manually operated while the power
            molding machine is power driven. The power driven is used to
            eliminate the manual labour of ramming and at the same produce
            better mold.
          </Content>
          <ContentImg url={student} mv={-60} />
        </Container>
        <SubHeadingText2 text="Melting Equipment " />
        <Content>
          The metal is required to be melted at a correct temperature before
          pouring it into a mold. The following furnaces are commonly used for
          melting the metal. {"\n"}
          1. Cupola Furnaces {"\n"}
          2. Pen Health Furnaces {"\n"}
          3. Electric furnaces{"\n"}
          4. Crucible furnaces {"\n"}
          The first three types of furnaces are mostly used for melting ferrous
          metal. Crucible furnace is used for melting non-ferrous metal.
        </Content>
        <SubHeadingText2 text="Pouring Equipment " />
        <Content>
          The commonly used pouring equipment for pouring the metal from the
          furnace are ladles. The common practice is to store that molten metal
          temporarily into large holding ladles, from which it is tapped off as
          needed. These holding ladles are constructed of steel plate lined with
          a suitable refractory such as fire brick.
        </Content>
        <SubHeadingText2 text="Types of Ladles" />
        <Container>
          <Content>
            1. Hand or shank Ladles: this type of ladies are used for casting
            very small mold. It can hold about 15kg of metal and has only one
            handle or shank
          </Content>
          <ContentImg url={student} mv={-60} />
          <Content>
            2. Bull Ladles: these are larger sizes of shank ladles capable of
            holding 30kg to 60kg of molten metal. This ladle requires two
            workers to carry, and to rotate the shank for pouring out liquid
            metal.
          </Content>
          <ContentImg url={student} mv={-120} />
          <Caption text="Bull ladle" />
          <Content>
            3. Crane or monorail ladle: this is capable of holding 250kg or more
            molten metal. It is handled by overhead or monorail. These ladles
            are fed from the furnace
          </Content>
          <ContentImg url={student} mv={-60} />
          <Caption text="Crane or Monorail Ladle" />
          <Content>
            4. Lip-Pouring Ladles: it is almost difficult to pour clean metal
            free from the molten slag floating on top. Thus the metal at the
            pouring lip is skimmed clean, by means of metal skimming bar, before
            pouring.
          </Content>
          <Content>
            5. Bottom stoppered Ladles: there is a hole in the bottom of the
            ladle. The pouring is done by raising a vertical rod and plug
            covering the hole. The molten metal is poured from the bottom and
            does not disturb the slog which floats on the top.
          </Content>
          <ContentImg url={student} mv={-60} />
          <Caption text="Bottom Stopper Ladle" />
          <Content>
            6. Tea-Pot Ladles: these ladles are tilted by a hand wheel connected
            to a pinion, worm and gear wheel. The pouring spout is usually
            inside the body.
          </Content>
        </Container>
      </>
    ),
  },

];
