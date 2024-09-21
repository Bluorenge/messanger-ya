import { DatePicker, Portal } from '@ark-ui/react';
import { Box, HStack, Input } from '@chakra-ui/react';
import { Trans } from '@lingui/macro';
import { RiCalendar2Fill, RiCloseCircleLine } from 'react-icons/ri';

export default function RangeDataPicker() {
    return (
        <DatePicker.Root selectionMode="range">
            <HStack as={DatePicker.Control}>
                <Input
                    as={DatePicker.Input}
                    variant="green-border"
                    px={2.5}
                    py={2}
                />

                <DatePicker.Trigger>
                    <RiCalendar2Fill size="24px" />
                </DatePicker.Trigger>

                <DatePicker.ClearTrigger>
                    <RiCloseCircleLine size="24px" />
                </DatePicker.ClearTrigger>
            </HStack>

            <Portal>
                <DatePicker.Positioner>
                    <Box
                        as={DatePicker.Content}
                        layerStyle="range-date-picker"
                    >
                        <DatePicker.View view="day">
                            <DatePicker.Context>
                                {(api) => (
                                    <>
                                        <DatePicker.ViewControl>
                                            <DatePicker.PrevTrigger>
                                                <Trans>Prev</Trans>
                                            </DatePicker.PrevTrigger>

                                            <DatePicker.ViewTrigger>
                                                <DatePicker.RangeText />
                                            </DatePicker.ViewTrigger>

                                            <DatePicker.NextTrigger>
                                                <Trans>Next</Trans>
                                            </DatePicker.NextTrigger>
                                        </DatePicker.ViewControl>

                                        <DatePicker.Table>
                                            <DatePicker.TableHead>
                                                <DatePicker.TableRow>
                                                    {api.weekDays.map((weekDay, id) => (
                                                        <DatePicker.TableHeader key={id}>
                                                            {weekDay.short}
                                                        </DatePicker.TableHeader>
                                                    ))}
                                                </DatePicker.TableRow>
                                            </DatePicker.TableHead>

                                            <DatePicker.TableBody>
                                                {api.weeks.map((week, id) => (
                                                    <DatePicker.TableRow key={id}>
                                                        {week.map((day, id) => (
                                                            <DatePicker.TableCell
                                                                key={id}
                                                                value={day}
                                                            >
                                                                <DatePicker.TableCellTrigger>
                                                                    {day.day}
                                                                </DatePicker.TableCellTrigger>
                                                            </DatePicker.TableCell>
                                                        ))}
                                                    </DatePicker.TableRow>
                                                ))}
                                            </DatePicker.TableBody>
                                        </DatePicker.Table>
                                    </>
                                )}
                            </DatePicker.Context>
                        </DatePicker.View>

                        <DatePicker.View view="month">
                            <DatePicker.Context>
                                {(api) => (
                                    <>
                                        <DatePicker.ViewControl>
                                            <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                                            <DatePicker.ViewTrigger>
                                                <DatePicker.RangeText />
                                            </DatePicker.ViewTrigger>
                                            <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                                        </DatePicker.ViewControl>
                                        <DatePicker.Table>
                                            <DatePicker.TableBody>
                                                {api
                                                    .getMonthsGrid({ columns: 4, format: 'short' })
                                                    .map((months, id) => (
                                                        <DatePicker.TableRow key={id}>
                                                            {months.map((month, id) => (
                                                                <DatePicker.TableCell
                                                                    key={id}
                                                                    value={month.value}
                                                                >
                                                                    <DatePicker.TableCellTrigger>
                                                                        {month.label}
                                                                    </DatePicker.TableCellTrigger>
                                                                </DatePicker.TableCell>
                                                            ))}
                                                        </DatePicker.TableRow>
                                                    ))}
                                            </DatePicker.TableBody>
                                        </DatePicker.Table>
                                    </>
                                )}
                            </DatePicker.Context>
                        </DatePicker.View>

                        <DatePicker.View view="year">
                            <DatePicker.Context>
                                {(api) => (
                                    <>
                                        <DatePicker.ViewControl>
                                            <DatePicker.PrevTrigger>Prev</DatePicker.PrevTrigger>
                                            <DatePicker.ViewTrigger>
                                                <DatePicker.RangeText />
                                            </DatePicker.ViewTrigger>
                                            <DatePicker.NextTrigger>Next</DatePicker.NextTrigger>
                                        </DatePicker.ViewControl>
                                        <DatePicker.Table>
                                            <DatePicker.TableBody>
                                                {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                                                    <DatePicker.TableRow key={id}>
                                                        {years.map((year, id) => (
                                                            <DatePicker.TableCell
                                                                key={id}
                                                                value={year.value}
                                                            >
                                                                <DatePicker.TableCellTrigger>
                                                                    {year.label}
                                                                </DatePicker.TableCellTrigger>
                                                            </DatePicker.TableCell>
                                                        ))}
                                                    </DatePicker.TableRow>
                                                ))}
                                            </DatePicker.TableBody>
                                        </DatePicker.Table>
                                    </>
                                )}
                            </DatePicker.Context>
                        </DatePicker.View>
                    </Box>
                </DatePicker.Positioner>
            </Portal>
        </DatePicker.Root>
    );
}
