        PRE-FLEXBOX
        ---------

- Use different positional properties , such as 'absolute'

- Floats, and clear fixes

-Fixed heights fro columns


        ENTER FLEXBOX
        -------------

- Flexbox is a css display type designed to help us craft CSS layouts much easier

- Control the position, size and spacing of elements relative to their parent elements and each other

-Works great responsively



        BENEFITS 
        --------
-Navigation bars & menus

-Grid layouts

-Bar charts

-Equal height columns



        FLEX-GROW:
        ----------
-We use it to expand elements into available space at the rate at which itexpands into that available space is 
 governed by {flex-grow:1; flexgrow:2; flex-grow:3} this number here. so it all relative to the other elements next to it .

-It says to the items that I want you to grow into the available spaceat this given rate. We give each elements a different 
 flex grow rate and thats why they grew a different rates to  different widths



        FLEX-SHRINK:
        ------------
- It is totally opposite of flex grow . Instead of determining the rate at which they gorw we're goining to determine the 
  rate at which thety shrink as the browser gets smaller .

        [flex-shrink:3;]


        FLEX-WRAP:
        ----------
- when the screen size decreases the elements wrap down . Insted of scrolling all the elements get down or wrap down to the next line 
  we have : [flex-wrap: wrap, nowrap, wrap-reverse ] values


        FLEX-BASIS:
        -----------

-Its similar to minimum width in that it defines the startong width of each elements instead of minimum width we could write
 diff between


        FLEX-AXIS:
        ---------
- When we use flexbox there are two axis : 
        -Main axis       
        -Cross axis

        when we change the value of flex flow, we're changing the direction of the axis . When flex flow is equal to row then
        the main axis is goining across in essentially a row and elements always follow the main axis they line up in the 
        direction of the main axis.So they are flowing downwards in a column. In this cae sde they go across in a row and 
        the fross axis is perpendicular always to the main axis so in this case is going down. When we change the flex flow 
        property to equal column what happens is the axis switch around and the crossa xis now goes across and the main axis 
        goes down. Certain properties  are applied to the mian axis only and certain to the cross axis only. Depending on what
        we have flex row set to then the effect of these properties is gonna seem a lil different

        when flex-flow is row then main axis runs across in a row , cross axis goes downwards .

        [flex-flow: row, column]
                
        ALIGN: 
        -----
-Cross axis: [align-items:center]
-Main axis: [justify-content: center]

        GRID vs STACK
        --------------
        (in exmple 3)

        ELEMENT ORDER:
        -------------
-In flexbox we can change the order of the elements using order property. The default value of each flex element is 0. If all elemnts has the same value then the we page dispalys them as the source order. The lower the number they comes first and the highest number the goes last 





